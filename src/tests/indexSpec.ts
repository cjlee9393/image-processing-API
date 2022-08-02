import app from '../index'

import supertest from 'supertest'
const request = supertest(app)

describe('Test endpoint responses', () => {
    it("gets the api endpoint '/status'", async () => {
        const response = await request.get('/status')
        expect(response.status).toBe(200)
    })
})
