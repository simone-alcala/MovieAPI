import { Inject, Injectable, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { MovieService } from './../movie/movie.service';
import { CategoryService } from './../category/category.service';

import { MovieCategory } from './entities/movie-category.entity';
import { CreateMovieCategoryDto } from './dto/create-movie-category.dto';
import { UpdateMovieCategoryDto } from './dto/update-movie-category.dto';

@Injectable()
export class MovieCategoryService {

  constructor (
    @Inject('MOVIE_CATEGORY_REPOSITORY') private movieCategoryRepository: Repository<MovieCategory>,
    private movieService: MovieService,
    private categoryService: CategoryService
  ) {}

  async create(createMovieCategoryDto: CreateMovieCategoryDto) {
    await this.movieService.findByIdOrFail(createMovieCategoryDto.movieId);
    await this.categoryService.findByIdOrFail(createMovieCategoryDto.categoryId);
    await this.findByMovieAndCategoryAndFail(createMovieCategoryDto.movieId, createMovieCategoryDto.categoryId);
    
    const createdMovieCategory = await this.movieCategoryRepository.insert(createMovieCategoryDto);

    return { movieCategoryId: createdMovieCategory.identifiers[0].id };
  }

  async findAll() {
    return await this.movieCategoryRepository.find();
  }

  async findOne(id: number) {
    const searchId: number = id | 0;
    return await this.movieCategoryRepository.findOneBy({ id: searchId });
  }

  async findByIdOrFail(id: number) {
    const movieCategory = await this.movieCategoryRepository.findOneBy({ id });
    if (!movieCategory) {
      throw new NotFoundException('MovieCategory ID not found');
    }
    return movieCategory;
  }

  async findByMovieAndCategory(movieId: number, categoryId: number) {
    return await this.movieCategoryRepository.findOneBy({ movieId, categoryId });
  }

  async findByMovieAndCategoryAndFail(movieId: number, categoryId: number, id?: number) {
    const movieCategory = await this.findByMovieAndCategory(movieId, categoryId);

    if (( id && movieCategory && movieCategory.id !== id ) || ( !id && movieCategory ) ) {
      throw new ConflictException('Category ID already registered for this Movie ID');
    }

    return movieCategory;

  }

  async update(id: number, updateMovieCategoryDto: UpdateMovieCategoryDto) {
    await this.findByIdOrFail(id);
    if (updateMovieCategoryDto.movieId) {
      await this.movieService.findByIdOrFail(updateMovieCategoryDto.movieId);
    }
    if (updateMovieCategoryDto.categoryId) {
      await this.categoryService.findByIdOrFail(updateMovieCategoryDto.categoryId);
    }
    await this.findByMovieAndCategoryAndFail(updateMovieCategoryDto.movieId, updateMovieCategoryDto.categoryId, id);
    
    const result = await this.movieCategoryRepository.update(id, updateMovieCategoryDto);
    if (result.affected === 0) {
      throw new InternalServerErrorException('MovieCategory was not updated');
    }

    return { movieCategoryId: id, affectedRegisters: result.affected };
  }

  async remove(id: number) {
    await this.findByIdOrFail(id);
    const result = await this.movieCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new InternalServerErrorException('MovieCategory was not deleted');
    }
    return { movieCategoryId: id, affectedRegisters: result.affected };
  }
}
