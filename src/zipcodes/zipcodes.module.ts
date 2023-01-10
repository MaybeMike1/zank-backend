import { Module } from '@nestjs/common';
import { ZipcodesService } from './zipcodes.service';
import { ZipcodesController } from './zipcodes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zipcode } from './entities/zipcode.entity';

@Module({
  controllers: [ZipcodesController],
  providers: [ZipcodesService],
  imports: [TypeOrmModule.forFeature([Zipcode])],
})
export class ZipcodesModule {}
