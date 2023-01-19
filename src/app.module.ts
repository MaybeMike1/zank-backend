import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { ZipcodesModule } from './zipcodes/zipcodes.module';
import { CountriesModule } from './countries/countries.module';
import { User } from './users/entities/user.entity';
import { Address } from './addresses/entities/address.entity';
import { Zipcode } from './zipcodes/entities/zipcode.entity';
import { Country } from './countries/entities/country.entity';

import { TagsModule } from './tags/tags.module';
import * as Joi from 'joi';
import { Tag } from './tags/entities/tag.entity';
import { ProductsModule } from './products/products.module';

const validation = {
  validationSchema: Joi.object({
    PORT: Joi.number().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
    TOKEN_SECRET: Joi.string().required(),
  }),
};

@Module({
  imports: [
    ConfigModule.forRoot({ ...validation, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get('POSTGRES_PORT'),
        host: configService.get('POSTGRES_HOST'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [User, Address, Zipcode, Country, Tag],
        factories: [],
        synchronize: true,
        logging: 'all',
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    AddressesModule,
    ZipcodesModule,
    CountriesModule,
    TagsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
