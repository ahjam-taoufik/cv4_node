const express = require('express')
const app = express()
const port = 3000


const friends=[
  {id:0,name:"ahmed"},
  {id:1,name:"taoufik1"}
]

app.get('/friends',(req,res)=>{
    res.json(friends)
})

app.get('/friends/:friendId',(req,res)=>{
    const friendId=Number(req.params.friendId)
    const friend=friends[friendId]
    if (friend) {
        res.status(200).send()
    } else {
      res.status(404).json({error:"this friend does not exist"})
    }

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})