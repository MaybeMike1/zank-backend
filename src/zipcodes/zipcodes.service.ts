import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZipcodeDto } from './dto/create-zipcode.dto';
import { UpdateZipcodeDto } from './dto/update-zipcode.dto';
import { Zipcode } from './entities/zipcode.entity';

@Injectable()
export class ZipcodesService {
  constructor(
    @InjectRepository(Zipcode)
    private zipCodeRepository: Repository<Zipcode>,
  ) {}
  async create(
    createZipcodeDto: CreateZipcodeDto,
  ): Promise<Zipcode | undefined> {
    const res = await this.zipCodeRepository.save(createZipcodeDto);

    return res ? res : undefined;
  }

  async findAll(): Promise<Zipcode[] | undefined> {
    const res = await this.zipCodeRepository.find();

    if (!res) return undefined;

    return res;
  }

  async findOne(id: number): Promise<Zipcode | undefined> {
    const res = await this.zipCodeRepository.findOne({ where: { id: id } });

    if (!res) return undefined;

    return res;
  }

  update(id: number, updateZipcodeDto: UpdateZipcodeDto) {
    return `This action updates a #${id} zipcode`;
  }

  async remove(id: number): Promise<Zipcode> {
    const res = await this.zipCodeRepository.findOne({ where: { id: id } });

    if (!res) return undefined;

    return res;
  }
}
