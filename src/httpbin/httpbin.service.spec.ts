import { HttpbinService } from './httpbin.service';
import { Test } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { HttpbinAdaptor } from './httpbin.adaptor';
import { lastValueFrom, map, of } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('HttpbinService', () => {
  let httpbinService: HttpbinService;
  let httpService: HttpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [HttpbinAdaptor, HttpbinService],
    }).compile();

    httpbinService = moduleRef.get<HttpbinService>(HttpbinService);
    httpService = moduleRef.get<HttpService>(HttpService);
  });

  afterEach(() => {
    httpbinService = undefined;
    httpService = undefined;
  });

  it('get user agent should return user agent object', async () => {
    const response: AxiosResponse = {
      config: undefined,
      data: undefined,
      headers: {
        'User-Agent': 'simple-client',
      },
      request: undefined,
      status: 0,
      statusText: '',
    };
    jest.spyOn(httpService, 'post').mockImplementation(() => of(response));
    const result = await lastValueFrom(
      httpbinService.getUserAgentFromHttpbinPost(),
    );
    return expect(result).toStrictEqual({ userAgent: 'simple-client' });
  });
});
