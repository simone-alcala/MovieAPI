import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';

import { CategoryService } from './category.service';
import { categoryProviders } from './category.providers';
import { CategoryController } from './category.controller';

import { movieCategoryProviders } from './../movie-category/movie-category.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryProviders, ...movieCategoryProviders, CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
