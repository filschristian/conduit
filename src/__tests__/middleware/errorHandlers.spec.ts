import request, { Response } from 'supertest';
import server from '../../server';
describe('errorHandlers', () => {
    describe('handle404Error', () => {
        it('should handle 404 Error', async () => {
            const res: Response = await request(server).post('/');
            expect(res.text).toEqual('Method not found.');
        });
    });
});
