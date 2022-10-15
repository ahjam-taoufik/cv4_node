const request =require('supertest')
const {app}=require('../app')
const friends=require('../models/friends')

describe('Test Get /friends',()=>{
    test('It should respond with 200 success',async()=>{
        const response=await request(app)
        .get('/friends/')
        .expect('Content-Type', /json/)
        .expect(200)
       
    })
})

describe('Test Get /friends/:id',()=>{
    test('It should respond with 200 success',async()=>{
        const response=await request(app)
        .get('/friends/0')
        .expect('Content-Type', /json/)
        .expect(200)
       
    })

    test('It should respond with 404 error',async()=>{
        const response=await request(app)
        .get('/friends/-1')
        .expect('Content-Type', /json/)
        .expect(404)
       
    })

})


describe('Test Post /friends',()=>{
    test('It should respond with 201 success',async()=>{
        const response=await request(app)
        .post('/friends')
        .send({
            id:friends.length,
            name:"test_1"
        })
        .expect('Content-Type', /json/)
        .expect(201)
    })
    test('It should respond with 400 error',async()=>{
        const response=await request(app)
        .post('/friends')
        .send({
            id:friends.length,
            // name:"test_1"
        })
        .expect('Content-Type', /json/)
        .expect(400)
    })

})