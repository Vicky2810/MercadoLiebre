const { log } = require('console');
const express = require('express');
const app= express();
const path = require('path');
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  })
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});