import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Container from './styled';

const DISQUS_CONFIG = [
  'shortname',
  'identifier',
  'title',
  'url',
  'category_id',
  'onNewComment',
  'language',
];

let __disqusAdded = false;

function copyProps(context, props) {
  const {
    onNewComment,
    language,
    router, // eslint-disable-line no-unused-vars
    ...rest // Those props have to be set on context.page
  } = props;

  if (!context.page) {
    context.page = {};
  }

  Object.keys(rest).forEach(prop => {
    context.page[prop] = rest[prop];
  });

  // Setting the language - if none is provided, the default one is used
  context.language = language;

  if (onNewComment) {
    context.callbacks = {
      onNewComment: [onNewComment],
    };
  }
}

class Disqus extends React.Component {
  componentDidMount() {
    this.loadDisqus();
  }

  shouldComponentUpdate(nextProps) {
    const { identifier } = this.props;
    return nextProps.identifier !== identifier;
  }

  componentDidUpdate() {
    this.loadDisqus();
  }

  addDisqusScript() {
    const { shortname } = this.props;
    if (__disqusAdded) {
      return;
    }
    this.disqus = document.createElement('script');
    const child = this.disqus;
    const parent = document.getElementsByTagName('body')[0];

    child.async = true;
    child.type = 'text/javascript';
    child.src = `//${shortname}.disqus.com/embed.js`;

    parent.appendChild(child);
    __disqusAdded = true;
  }

  loadDisqus() {
    const { props } = this;
    const _props = {};

    // Extract Disqus props that were supplied to this component
    DISQUS_CONFIG.forEach(prop => {
      // prop "shortname" is only necessary for loading the script, not for the config itself
      if (prop !== 'shortname' && !!props[prop]) {
        _props[prop] = props[prop];
      }
    });

    // If Disqus has already been added, reset it
    if (typeof window.DISQUS !== 'undefined') {
      window.DISQUS.reset({
        reload: true,
        config: () => {
          copyProps(this, _props);
          // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
          this.page.url = `${this.page.url.replace(/#/, '')}#!newthread`;
        },
      });
    } else {
      // Otherwise add Disqus to the page
      window.disqus_config = () => {
        copyProps(this, _props);
      };
      this.addDisqusScript();
    }
  }

  render() {
    const { props } = this;
    const _props = Object.keys(this.props).reduce(
      (memo, key) =>
        DISQUS_CONFIG.some(config => config === key)
          ? memo
          : { ...memo, [key]: props[key] },
      {},
    );

    return (
      <Container {..._props}>
        <div id="disqus_thread" />
      </Container>
    );
  }
}

Disqus.propTypes = {
  /**
   * `shortname` tells the Disqus service your forum's shortname,
   * which is the unique identifier for your website as registered
   * on Disqus. If undefined , the Disqus embed will not load.
   */
  shortname: PropTypes.string,

  /**
   * `identifier` tells the Disqus service how to identify the
   * current page. When the Disqus embed is loaded, the identifier
   * is used to look up the correct thread. If disqus_identifier
   * is undefined, the page's URL will be used. The URL can be
   * unreliable, such as when renaming an article slug or changing
   * domains, so we recommend using your own unique way of
   * identifying a thread.
   */
  identifier: PropTypes.string.isRequired,

  /**
   * `title` tells the Disqus service the title of the current page.
   * This is used when creating the thread on Disqus for the first time.
   * If undefined, Disqus will use the <title> attribute of the page.
   * If that attribute could not be used, Disqus will use the URL of the page.
   */
  title: PropTypes.string.isRequired,

  /**
   * `url` tells the Disqus service the URL of the current page.
   * If undefined, Disqus will take the window.location.href.
   * This URL is used to look up or create a thread if disqus_identifier
   * is undefined. In addition, this URL is always saved when a thread is
   * being created so that Disqus knows what page a thread belongs to.
   */
  url: PropTypes.string.isRequired,

  /**
   * `category_id` tells the Disqus service the category to be used for
   * the current page. This is used when creating the thread on Disqus
   * for the first time.
   */
  category_id: PropTypes.string,

  /**
   * `onNewComment` function accepts one parameter `comment` which is a
   * JavaScript object with comment `id` and `text`. This allows you to track
   * user comments and replies and run a script after a comment is posted.
   */
  onNewComment: PropTypes.func,

  /**
   * `language` tells the Disqus service which language should be used.
   * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
   * If undefined, English is used as default one
   */
  language: PropTypes.string,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Disqus.defaultProps = {
  onNewComment: () => {},
  language: 'es',
  shortname: 'cinesilo',
  category_id: null,
};

export default withRouter(Disqus);
