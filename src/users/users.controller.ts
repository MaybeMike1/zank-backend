import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './entities/dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[] | undefined> {
    const res = await this.usersService.findAll();

    return res ? res : undefined;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.usersService.findOne(id);

    if (!res) return HttpStatus.NOT_FOUND;

    return res;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: any) {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
