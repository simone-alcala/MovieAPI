import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { CategoryModule } from './category/category.module';
import { MovieCategoryModule } from './movie-category/movie-category.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, AuthModule, MovieModule, CategoryModule, MovieCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
