import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}
  async create(
    createCountryDto: CreateCountryDto,
  ): Promise<Country | undefined> {
    const res = await this.countryRepository.save(createCountryDto);

    if (!res) return undefined;

    return res;
  }

  async findAll(): Promise<Country[] | undefined> {
    const res = await this.countryRepository.find();

    if (!res) return undefined;

    return res;
  }

  async findOne(id: number): Promise<Country | undefined> {
    const res = await this.countryRepository.findOne({ where: { id: id } });

    return res ? res : undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async update(
    id: number,
    updateCountryDto: UpdateCountryDto,
  ): Promise<Country | undefined> {
    const foundCountry = await this.countryRepository.findOne({ id: id });

    if (!foundCountry) return undefined;

    await this.countryRepository.update({ id: id }, updateCountryDto);

    return foundCountry;
  }

  async remove(id: number): Promise<Country | undefined> {
    const res = await this.countryRepository.findOne({ where: { id: id } });

    if (!res) return undefined;

    await this.countryRepository.delete(id);

    return res;
  }
}
