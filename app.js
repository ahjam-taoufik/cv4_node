const express = require('express')
const app = express()
const friendRouter=require('./routers/friends')
// middleware to use json format in post request
app.use(express.json())
app.use('/friends',friendRouter)


module.exports = {
    app
}
