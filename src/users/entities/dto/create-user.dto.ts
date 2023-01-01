export class CreateUserDto {
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  middleName?: string;
  username!: string;
}
