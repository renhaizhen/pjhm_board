const homeApi = require('./api/homeApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api/home', homeApi)

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......')