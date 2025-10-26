npm install --save-dev jest ts-jest @types/jest
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/dist/', '/node_modules/'],
};
import request from 'supertest';
import express from 'express';
import { Message } from '../shared/types';

const app = express();
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

describe('GET /api/data', () => {
    it('should respond with a message', async () => {
        const response = await request(app).get('/api/data');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello from the server!');
    });
});
