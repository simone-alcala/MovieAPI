import { Module } from '@nestjs/common';

import { DatabaseModule } from './../database/database.module';

import { MovieService } from './movie.service';
import { movieProviders } from './movie.provider';
import { MovieController } from './movie.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [...movieProviders, MovieService],
  exports: [MovieService]
})
export class MovieModule {}
