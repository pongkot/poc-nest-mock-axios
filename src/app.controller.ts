import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpbinService } from './httpbin/httpbin.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpbinService: HttpbinService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user-agent')
  getUserAgentFromHttpBin(): any {
    return this.httpbinService.getUserAgentFromHttpbinPost();
  }
}
