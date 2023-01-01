import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CryptService } from 'src/crypt/crypt.service';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  exports: [UsersService],
  providers: [UsersService, CryptService],
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
})
export class UsersModule {}
