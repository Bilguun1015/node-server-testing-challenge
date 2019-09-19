const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 ok', () => {
            // make a GET request to the / endpoint on the server
            return request(server)
                .get('/')
                .then(res => {
                    // assert that we get an http status code 200
                    expect(res.status).toBe(200);
                });
        });

        it('should return { message : It is working}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({message: "It is working!"})
            expect(res.body.message).toBe('It is working!');
            expect(res.text).toEqual("{\"message\":\"It is working!\"}")
        });

        it('returns JSON', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                    done();
                });
        });

    });

});