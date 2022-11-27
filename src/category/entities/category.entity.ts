import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MovieCategory } from './../../movie-category/entities/movie-category.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @OneToMany(() => MovieCategory, (movieCategory) => movieCategory.category)
  movieCategories: MovieCategory[]
}
