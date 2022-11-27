import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';

import { CategoryService } from './category.service';
import { categoryProviders } from './category.providers';
import { CategoryController } from './category.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryProviders, CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
