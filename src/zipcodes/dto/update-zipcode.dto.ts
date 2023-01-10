import { PartialType } from '@nestjs/mapped-types';
import { CreateZipcodeDto } from './create-zipcode.dto';

export class UpdateZipcodeDto extends PartialType(CreateZipcodeDto) {}
