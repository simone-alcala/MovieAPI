import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './strategies/jwt.strategy';

import { UserModule } from './../user/user.module';
import { DatabaseModule } from './../database/database.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userProviders } from './../user/user.providers';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule, 
    UserModule, 
    PassportModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }
  )],
  controllers: [AuthController],
  providers: [...userProviders, AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
