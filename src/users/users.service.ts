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
    private UserRepository: Repository<User>,
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

    const savedUser = await this.UserRepository.save(userToSave);

    if (!savedUser) return undefined;

    const { passwordHash, ...userNoPassword } = savedUser;

    return userNoPassword;
  }
  private readonly users: User[] = [
    {
      id: 1,
      email: 'test@gmail.com',
      password: 'hash',
      firstName: 'Hans',
      lastName: 'Hansen',
      username: 'test@gmail.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
