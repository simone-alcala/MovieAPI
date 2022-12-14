import { Inject, Injectable, NotFoundException, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

import { MovieCategory } from './../movie-category/entities/movie-category.entity';

@Injectable()
export class MovieService {

  constructor (
    @Inject('MOVIE_REPOSITORY') private movieRepository: Repository<Movie>,
    @Inject('MOVIE_CATEGORY_REPOSITORY') private movieCategoryRepository: Repository<MovieCategory>
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const createdMovie = await this.movieRepository.insert(createMovieDto);
    return { movieId: createdMovie.identifiers[0].id };
  }

  async findAll() {
    const movies = await this.movieRepository.find({  
      relations: ['movieCategories.category']
    });
    
    const result = [];

    movies.map( movie => {
      const categories = [];
      movie.movieCategories.map( movieCategory => {
        categories.push({
          id: movieCategory.categoryId,
          name: movieCategory.category.name
        });         
      });
      result.push ({
        id: movie.id,
        title: movie.title,
        description: movie.description,
        year: movie.year,
        posterUrl: movie.posterUrl,
        trailerUrl: movie.trailerUrl,
        categories
      });
    })

    return result;
  }

  async findOne(id: number) {
    const searchId: number = id | 0;
    const movie = await this.movieRepository.findOne({ 
      where: { id: searchId },
      relations: ['movieCategories.category'] , 
    });

    if(!movie) {
      return movie;
    }

    const categories = [];
    
    movie.movieCategories?.map( movieCategory => {
      categories.push({
        id: movieCategory.categoryId,
        name: movieCategory.category.name
      });         
    });

    const result = {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      year: movie.year,
      posterUrl: movie.posterUrl,
      trailerUrl: movie.trailerUrl,
      categories
    };

    return result;
    
  }

  async findByIdOrFail(id: number) {
    const movie = await this.findOne(id);
    if (!movie) {
      throw new NotFoundException('Movie ID not found');
    }
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    await this.findByIdOrFail(id);
    const result = await this.movieRepository.update(id, updateMovieDto);
    if (result.affected === 0) {
      throw new InternalServerErrorException('Movie was not updated');
    }
    return { movieId: id, affectedRegisters: result.affected };
  }

  async remove(id: number) {
    await this.findByIdOrFail(id);
    await this.findByMovieIdAndFail(id);

    const result = await this.movieRepository.delete(id);
    if (result.affected === 0) {
      throw new InternalServerErrorException('Movie was not deleted');
    }

    return { movieId: id, affectedRegisters: result.affected };
  }

  async findByMovieIdAndFail(movieId: number) {
    const movieCategory = await this.movieCategoryRepository.findOneBy({ movieId });
    if (movieCategory) {
      throw new ConflictException('Movie ID related to MovieCategory');
    }
    return movieCategory;
  }
  
}
