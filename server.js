const express = require('express')
const app = express()
const port = 3000
const friends=require('./controllers/friends')


// middleware to use json format in post request
app.use(express.json())

app.post('/friends',friends.addFriend)


app.get('/friends',friends.getAllFriends)
app.get('/friends/:friendId',friends.getOneFriend)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})