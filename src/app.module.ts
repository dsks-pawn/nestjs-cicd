import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
