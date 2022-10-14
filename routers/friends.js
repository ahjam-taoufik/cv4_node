const express = require('express')
const friendsController=require('../controllers/friends')

const friendRouter=express.Router()

friendRouter.post('/',friendsController.addFriend)
friendRouter.get('/',friendsController.getAllFriends)
friendRouter.get('/:friendId',friendsController.getOneFriend)

module.exports=friendRouter