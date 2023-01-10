import { Address } from 'src/addresses/entities/address.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export type UserOmittingPasswordHash = Omit<User, 'passwordHash'>;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;
  @Column()
  lastName!: string;
  @Column()
  middleName?: string;
  @Column()
  passwordHash!: string;
  @Column()
  username!: string;

  @Column()
  phoneNumber!: string;

  @Column({ type: 'boolean' })
  verified!: boolean;

  @OneToMany(() => Address, (addresses) => addresses.user)
  addresses!: Address[];
}
