const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const users = [];
app.get('/api', (req, res) => res.send(users));

app.post('/check-username', (req, res) => {
  users.some(item => item.username === req.body.username)
    ?
    res.send({ message: "This username already exists" })
    :
    res.send({ message: "" });
});

app.post('/add-user', (req, res) => {
  users.push(req.body.data);
  res.cookie('username', req.body.data.username);
  res.redirect('/');
});

app.post('/process_login', (req, res) => {
  let { username, password } = req.body;
  users.some(item => item.username === username && item.password === password)
    ?
    (res.cookie('username', username), res.redirect('/'))
    :
    res.redirect('/?msg=fail');
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/');
});

app.listen(4000, console.log("Server is running on port 4000"));