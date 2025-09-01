const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const authRouter = require('./routes/auth');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

app.use('/auth', authRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
