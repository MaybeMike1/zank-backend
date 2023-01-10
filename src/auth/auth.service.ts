import { Dependencies, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { UserOmittingPasswordHash } from 'src/users/entities/user.entity';

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<UserOmittingPasswordHash> {
    const user = await this.userService.findOne(username);

    if (user && (await compare(pass, user.passwordHash))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordHash, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
