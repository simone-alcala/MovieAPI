import { Inject, Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  
  constructor (
    @Inject('CATEGORY_REPOSITORY') private categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    await this.findByNameAndFail(createCategoryDto.name);
    const createdCategory = await this.categoryRepository.insert(createCategoryDto);
    return { categoryId: createdCategory.identifiers[0].id };
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    const searchId: number = id | 0;
    return await this.categoryRepository.findOneBy({ id: searchId });
  }

  async findByName(name: string) {
    return this.categoryRepository.findOneBy({ name });
  }

  async findByNameAndFail(name: string, id?: number) {
    const category = await this.findByName(name);
    if (( id && category && category.id !== id ) || ( !id && category ) ) {
      throw new ConflictException('Category already registered');
    }
  }

  async findByIdOrFail(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw new NotFoundException('Category ID not found');
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.findByIdOrFail(id);
    await this.findByNameAndFail(updateCategoryDto.name, id);
    const result = await this.categoryRepository.update(id, updateCategoryDto);
    if (result.affected === 0) {
      throw new InternalServerErrorException('Category was not updated');
    }
    return { categoryId: id, affectedRegisters: result.affected };
  }

  async remove(id: number) {
    await this.findByIdOrFail(id);
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new InternalServerErrorException('Category was not deleted');
    }
    return { categoryId: id, affectedRegisters: result.affected };
  }

}
