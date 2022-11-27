import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { SignUpDto } from './dto/sign-up.dto';
import { UserService } from './../user/user.service';
import { User } from './../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor (
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
    private readonly userService: UserService
  ) {}

  async signUp(signUpDto: SignUpDto) {
    
    await this.userService.findByEmailAndFail(signUpDto.email);
    
    const data = {
      ...signUpDto,
      password: await bcrypt.hash(signUpDto.password, 10)
    }

    const createdUser = await this.userRepository.insert(data);
        
    return { userId: createdUser.identifiers[0].id };
  }

}
