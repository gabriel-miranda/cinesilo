const reQuery = /[?&]+/;
const reDoubleSlashes = /(\/\/+)/;

const slashesMiddleware = (append = false, options) => {
  options = options || {};
  return (req, res, next) => {
    if (req.method === 'GET') {
      const url = (req.originalUrl || req.url).split(reQuery);
      const location = url[0];
      let redirect;
      let headers;

      if (location.includes('_next') || location.includes('/static/')) {
        next();
        return;
      }

      if (append && location[location.length - 1] !== '/') {
        redirect = `${location}/`;
      } else if (
        !append &&
        location[location.length - 1] === '/' &&
        location !== '/'
      ) {
        redirect = location.slice(0, location.length - 1);
      }

      if (redirect) {
        if (url.length > 1) {
          redirect += `?${url.slice(1).join('&')}`;
        }

        redirect = (options.base || '') + redirect;
        redirect = redirect.replace(reDoubleSlashes, '/');

        if (redirect[0] !== '/') {
          redirect = `/${redirect}`;
        }

        headers = options.headers || {};
        headers.Location = redirect;

        res.writeHead(options.code || 301, headers);
        res.end();
        return;
      }
    }
    next();
  };
};

module.exports = { slashesMiddleware };
