import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

}

