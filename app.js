const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/home', (req, res) => {
  console.log(req.url)
  res.render('home')
});

app.get('/about', (req, res) => {
  console.log(req.url)
  res.render('about')
});

app.get('/works', (req, res) => {
  console.log(req.url)
  res.render('works')
});

app.get('/gallery', (req, res) => {
    console.log(req.url)
    res.render('gallery')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});