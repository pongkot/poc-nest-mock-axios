import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpbinAdaptor } from './httpbin.adaptor';
import { HttpbinService } from './httpbin.service';

@Module({
  imports: [HttpModule],
  providers: [HttpbinAdaptor, HttpbinService],
  exports: [HttpbinService],
})
export class HttpbinModule {}
