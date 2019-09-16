import request, { Response } from 'supertest';
import server from "../../server";

describe('SearchService', () => {
  it('should display hello world', async () => {
    const response: Response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello world!');
  });
});
