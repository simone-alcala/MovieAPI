import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserService } from './../user/user.service';
import { User } from './../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor (
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
    private readonly userService: UserService,
    private jwtService: JwtService
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

  async signIn(signInDto: SignInDto) {
    const user = await this.validateUser(signInDto.email, signInDto.password);
    const token = this.jwtService.sign({ userId: user.id, email: user.email }, );
    return { access_token: token };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        delete user.password;        
        return user;
      }
    }
    throw new UnauthorizedException('Invalid email/password');
  }

}
