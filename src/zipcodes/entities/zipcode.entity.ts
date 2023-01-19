import { Address } from 'src/addresses/entities/address.entity';
import { Country } from 'src/countries/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Zipcode {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Address, (address) => address.zipCode)
  addresses!: Address[];

  @ManyToOne(() => Country, (country) => country.zipCodes)
  country!: Country;

  @Column({ unique: true })
  zipCode!: string;

  @Column({ unique: true })
  city!: string;
}
