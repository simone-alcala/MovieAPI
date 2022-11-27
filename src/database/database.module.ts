import { databaseProviders } from './database.providers';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';


@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
