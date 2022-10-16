// const express = require('express')
// const app = express()
const {app}=require('./app')
const port = 3000

// middleware to use json format in post request
// app.use(express.json())

function delay(duration){
  const startTime=Date.now()
  while (Date.now() - startTime<duration) {
    // event loop is blocked . . . . 
  }
}

app.get('/timer',(req,res)=>{
  delay(8000)
   res.send(` tik tik tik. . . : ${process.pid}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

