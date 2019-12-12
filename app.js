const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use('/css',express.static( 'public/css'));
app.use('/images',express.static( 'public/images'));
app.use('/',express.static( 'public/'));

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html')
})
