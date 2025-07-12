const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === 'your-secure-api-key') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized: API key missing or invalid' });
  }
};
module.exports = auth;