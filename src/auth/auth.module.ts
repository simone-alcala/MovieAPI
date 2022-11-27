import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { UserModule } from './../user/user.module';
import { DatabaseModule } from './../database/database.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userProviders } from './../user/user.providers';


@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule],
  controllers: [AuthController],
  providers: [...userProviders, AuthService],
  exports: [AuthService]
})
export class AuthModule {}
