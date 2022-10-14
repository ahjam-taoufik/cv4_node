const express = require('express')
const app = express()
const port = 3000

//content type : text/html
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//content type : text/html
app.get('/h', (req, res) => {
  res.send('<h1>html1234</h1>')
})

//content type :application/json
app.get('/j', (req, res) => {
  res.send({
    id:1,
    name:"taoufik "
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})