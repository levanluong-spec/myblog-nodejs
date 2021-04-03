
const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
//HTTP logger
app.use(morgan('combined'))

// Template engine 
app.engine('hbs', handlebars(
  {
   extname : '.hbs'
  }
 ))
app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
  res.render('home')
})
app.get('/news', (req, res) =>{
  res.render('news')
})

app.set('views', path.join(__dirname, 'resources/views'))
// console.log('view :', path.join(__dirname, 'resources/views'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
