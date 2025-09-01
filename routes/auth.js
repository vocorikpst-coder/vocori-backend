const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Profile data', user: req.user });
});

module.exports = router;
