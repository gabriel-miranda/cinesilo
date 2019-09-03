import React, { Component } from 'react';

function getComponentDisplayName(c) {
  return c.displayName || c.name || 'Unknown';
}

const withData = query => ComposedComponent =>
  class WithData extends Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent,
    )})`;

    static async getInitialProps(ctx) {
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }
      const params = ctx.query;
      const data = await ctx.api.get(query(params));
      if (data.errors) {
        ctx.res.statusCode = data.errors[0].statusCode;
      }
      return {
        ...params,
        ...data,
        ...composedInitialProps,
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };

export default withData;
