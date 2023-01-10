import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZipcodesService } from './zipcodes.service';
import { CreateZipcodeDto } from './dto/create-zipcode.dto';
import { UpdateZipcodeDto } from './dto/update-zipcode.dto';

@Controller('zipcodes')
export class ZipcodesController {
  constructor(private readonly zipcodesService: ZipcodesService) {}

  @Post()
  create(@Body() createZipcodeDto: CreateZipcodeDto) {
    return this.zipcodesService.create(createZipcodeDto);
  }

  @Get()
  findAll() {
    return this.zipcodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zipcodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZipcodeDto: UpdateZipcodeDto) {
    return this.zipcodesService.update(+id, updateZipcodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zipcodesService.remove(+id);
  }
}
