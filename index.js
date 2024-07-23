require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('chirayu is emperor!')
})
app.get('/youtube', (req, res) => {
    res.send('<h1>jai sri ram</h1>')
})
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})