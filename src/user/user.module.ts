import { DatabaseModule } from './../database/database.module';
import { userProviders } from './user.providers';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  exports: [UserService]
})
export class UserModule {}