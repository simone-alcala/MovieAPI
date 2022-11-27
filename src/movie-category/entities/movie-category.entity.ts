import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';

import { Movie } from './../../movie/entities/movie.entity';
import { Category } from './../../category/entities/category.entity';

@Entity({ name: 'movieCategory' })
@Unique(['movieId', 'categoryId'])
export class MovieCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieCategories)
  movie: Movie

  @ManyToOne(() => Category, (category) => category.movieCategories)
  category: Category

}
