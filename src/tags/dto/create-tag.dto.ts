import { IsBoolean, IsNotEmpty, Min } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  active: boolean;
}
