const request =require('supertest')
const {app}=require('../app')

describe('Test Get /friends',()=>{
    test('It should respond with 200 success',async()=>{
        const response=await request(app).get('/friends/')
        expect(response.statusCode).toBe(200)
    })
})