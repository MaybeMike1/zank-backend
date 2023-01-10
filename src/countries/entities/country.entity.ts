import { Zipcode } from 'src/zipcodes/entities/zipcode.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  country!: string;

  @OneToMany(() => Zipcode, (zipcode) => zipcode.country)
  zipCodes!: Zipcode[];
}
