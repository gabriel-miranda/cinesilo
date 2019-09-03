module.exports = {
  handleMiddleware: handle => (req, res, next) => {
    res.locals.handle = handle;
    next();
  },
};
