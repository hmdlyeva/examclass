const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
require('./src/config/db')
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cors())
const routes = require('./src/router/routers')
app.use('/', routes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})