module.exports = {
  contentfulMiddleware: connections => (req, res, next) => {
    Object.keys(connections).forEach(c => {
      res.locals[c] = connections[c];
    });
    next();
  },
};
