const express = require('express')
const app = express()
const port = 3000


const friends=[
  {id:0,name:"ahmed"},
  {id:1,name:"taoufik1"}
]

// middleware to use json format in post request
app.use(express.json())

app.post('/friends',(req,res)=>{
    if (!req.body.name) {
     return res.status(400).json({error:"missing name of friend"})
    }

    const friend={
      id:friends.length,
      name:req.body.name
    }
    friends.push(friend)
    res.status(200).json([friend,{message:{success:"friend has been created"}}])
})



app.get('/friends',(req,res)=>{
    res.json(friends)
})

app.get('/friends/:friendId',(req,res)=>{
    const friendId=Number(req.params.friendId)
    const friend=friends[friendId]
    if (friend) {
        res.status(200).send(friend)
    } else {
      res.status(404).json({message:{error:"this friend does not exist"}})
    }

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})