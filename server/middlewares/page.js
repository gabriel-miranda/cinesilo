const pageMiddleware = (req, res, n) => {
  const { page } = req.params;
  if (Number.isNaN(parseInt(page, 10)) || page < 2) {
    return res.redirect(301, '/');
  }
  return n();
};

module.exports = { pageMiddleware };
