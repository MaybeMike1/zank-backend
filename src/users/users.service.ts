import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptService } from 'src/crypt/crypt.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './entities/dto/create-user.dto';
import { User, UserOmittingPasswordHash } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private cryptService: CryptService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserOmittingPasswordHash | undefined> {
    const { password, ...rest } = createUserDto;

    const hash = await this.cryptService.hash(password);

    const userToSave = {
      passwordHash: hash,
      ...rest,
    };

    const savedUser = await this.userRepository.save(userToSave);

    if (!savedUser) return undefined;

    const { passwordHash, ...userNoPassword } = savedUser;

    return userNoPassword;
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { username: username },
    });

    if (!user) return undefined;

    return user;
  }

  async findAll(): Promise<User[] | undefined> {
    const res = await this.userRepository.find();

    return res ? res : undefined;
  }

  async remove(id: number): Promise<User | undefined> {
    const res = await this.userRepository.findOne({ where: { id: id } });

    await this.userRepository.delete(id);

    return res;
  }
}
