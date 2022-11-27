import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';

import { MovieCategoryService } from './movie-category.service';
import { CreateMovieCategoryDto } from './dto/create-movie-category.dto';
import { UpdateMovieCategoryDto } from './dto/update-movie-category.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('movie-category')
export class MovieCategoryController {
  constructor(private readonly movieCategoryService: MovieCategoryService) {}

  @Post()
  create(@Body() createMovieCategoryDto: CreateMovieCategoryDto) {
    return this.movieCategoryService.create(createMovieCategoryDto);
  }

  @Get()
  findAll() {
    return this.movieCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieCategoryDto: UpdateMovieCategoryDto) {
    return this.movieCategoryService.update(+id, updateMovieCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieCategoryService.remove(+id);
  }
}
