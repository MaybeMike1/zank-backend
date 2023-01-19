import { Country } from 'src/countries/entities/country.entity';

export class CreateZipcodeDto {
  country!: Country;
  zipCode!: string;
  city!: string;
}
