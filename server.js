const express = require('express')
const app = express()
const friendRouter=require('./routers/friends')
const port = 3000

// middleware to use json format in post request
app.use(express.json())


app.use('/friends',friendRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})