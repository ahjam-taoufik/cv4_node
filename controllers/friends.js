
const friends=require('../models/friends')
const getAllFriends=(req,res)=>{
    res.json(friends)
}

function getOneFriend(req,res){
    const friendId=Number(req.params.friendId)
    const friend=friends[friendId]
    if (friend) {
        res.status(200).send(friend)
    } else {
      res.status(404).json({message:{error:"this friend does not exist"}})
    }
}
function addFriend(req,res){
    if (!req.body.name) {
     return res.status(400).json({error:"missing name of friend"})
    }

    const friend={
      id:friends.length,
      name:req.body.name
    }
    friends.push(friend)
    res.status(201).json([friend,{message:{success:"friend has been created"}}])
}

module.exports={
    getAllFriends,
    getOneFriend,
    addFriend
}