import { DataSource } from 'typeorm';
import { MovieCategory } from './entities/movie-category.entity';

export const movieCategoryProviders = [{
    provide: 'MOVIE_CATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(MovieCategory),
    inject: ['DATA_SOURCE']
  }
];
