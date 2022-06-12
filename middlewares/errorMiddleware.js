module.exports = (err, req, res, next) => {
    if (err.code && err.status) {
      return res.status(err.status).json({ message: err.message, code: err.code });
    }
  
    return res.status(500).json({ message: err.message });
}