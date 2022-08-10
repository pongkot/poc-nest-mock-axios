import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpbinModule } from './httpbin/httpbin.module';

@Module({
  imports: [HttpbinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
