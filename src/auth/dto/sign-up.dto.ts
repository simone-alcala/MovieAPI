import { IsEmail, IsString, MinLength, } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { User } from './../../user/entities/user.entity';

export class SignUpDto extends OmitType(User, ['id']){
  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;
}
