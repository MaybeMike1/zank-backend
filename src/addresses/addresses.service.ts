import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async create(
    createAddressDto: CreateAddressDto,
  ): Promise<Address | undefined> {
    const res = this.addressRepository.save(createAddressDto);

    if (!res) return undefined;

    return res;
  }

  async findAll(): Promise<Address[] | undefined> {
    const res = await this.addressRepository.find();

    if (!res) return undefined;

    return res;
  }

  async findOne(id: number): Promise<Address | undefined> {
    const res = await this.addressRepository.findOne({ where: { id: id } });

    if (!res) return undefined;

    return res;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  async remove(id: number): Promise<Address | undefined> {
    const res = await this.addressRepository.findOne({ where: { id: id } });

    await this.addressRepository.delete(id);

    return res;
  }
}
