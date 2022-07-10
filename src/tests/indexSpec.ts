import app from '../index';

import supertest from 'supertest';
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint \'api/images\'', async (done) => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
        done();
    }
)});