const app = require('../src/app');
const request = require('supertest');

describe('API Endpoints', () => {
    test('GET /api/hello should return greeting', async () => {
        const response = await request(app)
            .get('/api/hello')
            .expect(200);
        
        // Add breakpoint here to examine response
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Hello from debug server!');
    });

    test('GET /api/debug/:id should return debug info', async () => {
        const testId = 123;
        const response = await request(app)
            .get(`/api/debug/${testId}`)
            .expect(200);
        
        // Add breakpoint here to examine debug response
        expect(response.body).toHaveProperty('id', testId);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
    });

    test('POST /api/data should process and return data', async () => {
        const testData = {
            name: 'Test User',
            value: 42
        };
        
        const response = await request(app)
            .post('/api/data')
            .send(testData)
            .expect(200);
        
        // Add breakpoint here to examine processed data
        expect(response.body).toHaveProperty('name', testData.name);
        expect(response.body).toHaveProperty('value', testData.value);
        expect(response.body).toHaveProperty('processed', true);
        expect(response.body).toHaveProperty('timestamp');
    });
});