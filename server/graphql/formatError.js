function formatError(err) {
  try {
    const { statusCode, message } = JSON.parse(err.message);
    return { statusCode, message };
  } catch (e) {
    return err;
  }
}

module.exports = { formatError };
