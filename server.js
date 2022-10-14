const express = require('express')
const app = express()
const port = 3000
const friendsController=require('./controllers/friends')

const friendRouter=express.Router()

// middleware to use json format in post request
app.use(express.json())


friendRouter.post('/',friendsController.addFriend)
friendRouter.get('/',friendsController.getAllFriends)
friendRouter.get('/:friendId',friendsController.getOneFriend)

app.use('/friends',friendRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})