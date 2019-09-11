import request, { Response } from 'supertest';
import server from "../../server";

describe('SearchService', () => {
  it('should display hello world', async () => {
    const res: Response = await request(server).get('/');
    expect(res.text).toEqual('Hello world!');
  });
});
