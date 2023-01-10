import * as faker from 'faker';
import { define } from 'typeorm-seeding';
import { CryptService } from 'src/crypt/crypt.service';
import { User } from './entities/user.entity';
import { Address } from 'src/addresses/entities/address.entity';

define(
  User,
  (
    _,
    context?: {
      id: number;
      firstName: string;
      password: string;
      lastName: string;
      icon: number;
      middleName: string;
      username: string;
      passwordHash: string;
      phoneNumber: string;
      verified: boolean;
      addresses: Address[];
      cryptService: CryptService;
    },
  ) => {
    const user = new User();

    user.id = context?.id ?? faker.datatype.number(1000);
    user.firstName = context?.firstName ?? faker.datatype.number(1000);
    user.lastName = context?.lastName ?? faker.name.lastName();

    user.passwordHash =
      context?.passwordHash && context?.cryptService
        ? context?.cryptService.hashSync(context.password)
        : 'banankage';
    user.verified = context?.verified ?? faker.datatype.boolean();

    user.phoneNumber =
      context?.phoneNumber ?? faker.phone.number('+45 91 ### ## ##');

    user.username =
      context?.username ?? faker.internet.email(user.firstName, user.lastName);
    return user;
  },
);
