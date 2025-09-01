const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Dummy user
const user = { id: 1, username: 'test', password: 'password' };

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
