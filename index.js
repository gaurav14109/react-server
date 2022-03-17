const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({data:'React web server is working'})
})
app.listen(4000, (error) => {
    console.log('Server is listening')
})