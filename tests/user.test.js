require('dotenv').config();

const request = require('supertest');
const app = require('../src/app');

describe('Teste de registro de usuário', () => {
    it('Teste na rota /api/registration', async () => {
        const res = await request(app).post('/api/registration').send({
            email: "leonardo.e@lyncas.net",
            name: "jonathansc92@gmail.com",
            document: "111.111.111-11",
            date: "06/01/1992",
            phone: "(11) 111111111",
            password: "1111111111111"
        });

        console.log(res)
        expect(res.statusCode).toBe(201);
    });
});