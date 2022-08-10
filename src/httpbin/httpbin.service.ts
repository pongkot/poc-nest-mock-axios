import { Injectable } from '@nestjs/common';
import { HttpbinAdaptor } from './httpbin.adaptor';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class HttpbinService {
  constructor(private readonly httpbinAdaptor: HttpbinAdaptor) {}

  getUserAgentFromHttpbinPost(): Observable<any> {
    return this.httpbinAdaptor.post().pipe(
      map((response: AxiosResponse<any>) => ({
        userAgent: response.headers['User-Agent'],
      })),
    );
  }
}
