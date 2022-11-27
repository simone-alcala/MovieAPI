import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MovieCategory } from './../../movie-category/entities/movie-category.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column( { type: 'text' } )
  description: string;

  @Column( { type: 'varchar', length: 4 } )
  year: string;

  @Column( { type: 'varchar', nullable: true } )
  posterUrl: string;

  @Column( { type: 'varchar', nullable: true } )
  trailerUrl: string;

  @OneToMany(() => MovieCategory, (movieCategory) => movieCategory.movie)
  movieCategories: MovieCategory[]

}

