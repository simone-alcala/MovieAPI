import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';

import { MovieService } from './../movie/movie.service';
import { CategoryService } from './../category/category.service';

import { movieProviders } from './../movie/movie.provider';
import { categoryProviders } from './../category/category.providers';

import { MovieCategoryService } from './movie-category.service';
import { movieCategoryProviders } from './movie-category.providers';
import { MovieCategoryController } from './movie-category.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MovieCategoryController],
  providers: [
    ...movieCategoryProviders, 
    ...movieProviders, 
    ...categoryProviders, 
    MovieCategoryService, 
    MovieService, 
    CategoryService
  ],
  exports: [MovieCategoryService]
})
export class MovieCategoryModule {}
