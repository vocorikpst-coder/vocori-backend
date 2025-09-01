const express = require('express');
const router = express.Router();

// Dummy signup route
router.post('/', (req, res) => {
  const { username, password } = req.body;
  // Here you would add user to DB
  res.json({ message: 'User registered', username });
});

module.exports = router;
