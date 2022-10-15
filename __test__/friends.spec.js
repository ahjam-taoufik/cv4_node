const request =require('supertest')
const {app}=require('../app')

describe('Test Get /friends',()=>{
    test('It should respond with 200 success',async()=>{
        const response=await request(app)
        .get('/friends/')
        .expect('Content-Type', /json/)
        .expect(200)
       
    })
})

describe('Test Post /friends',()=>{
    test('It should respond with 201 success',async()=>{
        const response=await request(app)
        .post('/friends')
        .send({
            id:2,
            name:"test_1"
        })
        .expect('Content-Type', /json/)
        .expect(201)
    })
})