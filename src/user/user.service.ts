import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  
  constructor (@Inject('USER_REPOSITORY') private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findByEmailAndFail(email: string) {
    const user = await this.findByEmail(email);
    if (user) {
      throw new ConflictException('Email already registered');
    }
  }

}
