const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

let fake_user = {
  username: "bob",
  password: "12345"
};

app.post('/process_login', (req, res) => {
  let { username, password } = req.body;
  if (username === fake_user.username && password === fake_user.password) {
    res.cookie('username', username);
    res.redirect('/welcome');
  } else {
    res.redirect('/login?msg=fail')
  };
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/login');
});

app.listen(4000, console.log("Server is running on port 4000"));