const request = require('supertest')
const app = require('../src/index')

test('Shoud list all people from list',  () => {
     request(app).get('/people').then( (res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})