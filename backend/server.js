const express = require('express');
const cookieParser = require('cookie-parser')
const data = require('./database');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.post('/process_login', (req, res) => {
  let { username, password } = req.body;
  data.some(item => item.username === username && item.password === password)
    ?
    (res.cookie('username', username), res.redirect('/'))
    :
    res.redirect('/?msg=fail');
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/');
});

app.get('/api', (req, res) => res.send(data));

let username;
app.post('/check-username', async (req, res) => {
  console.log(req.body);
  await (username = req.body);
  console.log(username);
});

app.listen(4000, console.log("Server is running on port 4000"));