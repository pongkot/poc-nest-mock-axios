import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class HttpbinAdaptor {
  constructor(private readonly httpService: HttpService) {}

  post(): Observable<AxiosResponse<any>> {
    return this.httpService.post('https://httpbin.org/post');
  }
}
