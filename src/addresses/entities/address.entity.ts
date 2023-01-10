import { User } from 'src/users/entities/user.entity';
import { Zipcode } from 'src/zipcodes/entities/zipcode.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  streetName!: string;
  @Column()
  streetNumber!: number;
  @Column({ nullable: true })
  floor!: number;
  @Column({ nullable: true })
  door!: number;

  @ManyToOne(() => Zipcode, (zipcodes) => zipcodes.addresses)
  @JoinColumn({ name: 'zipcode' })
  zipCode!: Zipcode;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'userId' })
  user!: User;
}
