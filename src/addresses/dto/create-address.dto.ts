import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateZipcodeDto } from 'src/zipcodes/dto/create-zipcode.dto';
import { Zipcode } from 'src/zipcodes/entities/zipcode.entity';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  streetName!: string;
  @IsNumber()
  @IsNotEmpty()
  streetNumber!: number;
  @IsOptional()
  @IsNumber()
  floor!: number;
  @IsOptional()
  @IsNumber()
  door!: number;
  @Type(() => CreateZipcodeDto)
  @IsNotEmpty()
  zipCode!: Zipcode;
  userId!: number;
}
