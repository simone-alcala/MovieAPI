import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNumberString, IsOptional, IsUrl, MaxLength, MinLength } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @MinLength(2)
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @MinLength(2)
  description: string;

  @ApiProperty()
  @MinLength(4)
  @MaxLength(4)
  @IsNumberString()
  @IsAlphanumeric()
  year: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  posterUrl?: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  trailerUrl?: string;
}
