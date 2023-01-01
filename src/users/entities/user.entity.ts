import { Entity, PrimaryGeneratedColumn } from 'typeorm';

export type UserOmittingPasswordHash = Omit<User, 'passwordHash'>;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  firstName!: string;

  lastName!: string;

  middleName?: string;

  email!: string;

  password!: string;

  username!: string;
}
