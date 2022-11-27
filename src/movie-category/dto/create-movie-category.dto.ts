import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateMovieCategoryDto {
  @ApiProperty()
  @IsInt()
  @IsPositive()
  movieId: number;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  categoryId: number;
}
