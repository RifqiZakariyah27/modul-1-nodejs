                    //Hello World
console.log('Hello World');

                    //Hello Okky - WEB
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello Okky')
})
app.listen('8080');

                    //Hello Arkademy - Express
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('hello arkademy')
})
app.listen('8080');