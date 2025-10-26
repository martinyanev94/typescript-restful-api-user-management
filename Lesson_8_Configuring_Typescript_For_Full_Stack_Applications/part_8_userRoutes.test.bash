mkdir tests
import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../src/routes/userRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', userRoutes);

describe('User Routes', () => {
    it('should create a user and respond with a message', async () => {
        const response = await request(app).post('/api/user').send({
            name: 'Alice',
            email: 'alice@example.com',
        });

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            message: 'User data received',
            user: {
                name: 'Alice',
                email: 'alice@example.com',
            },
        });
    });

    it('should return 400 if name or email is missing', async () => {
        const response = await request(app).post('/api/user').send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Name and Email are required!');
    });
});
npm install --save-dev jest supertest ts-jest @types/jest @types/supertest
"test": "jest"
npm test
