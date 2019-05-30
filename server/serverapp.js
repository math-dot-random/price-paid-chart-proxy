const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const request = require('request');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // parse application/json
app.use(bodyParser.json());

app.get('/stocks/:stock', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/stocks/:stock/', (req, res) => {
  res.redirect(`http://localhost:3111/api/stocks/${req.params.stock}`)
});

app.get('/stocks/:stock', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

//at this path, load this webpage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/tesla/suggestions', (req, res) => {
  request(`http://localhost:3050/api/tesla/suggestions`).pipe(res);
})

//GET request for stock price data
app.get('/api/stocks/:ticker/prices/:type', (req, res) => {
  res.redirect(`http://localhost:3222/api/stocks/${req.params.ticker}/prices/${req.params.type}`);
})

app.get('/api/stocks/:stock/price', (req, res) => {
  res.redirect(`http://localhost:3001/api/stocks/${req.params.stock}/price`);
});

app.get('/api/stocks/:stock/earnings', (req, res) => {
  res.redirect(`http://localhost:3000/api/stocks/${req.params.stock}/earnings`);
});
//GET request for stock price data

module.exports = app;