import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Http2ServerRequest } from 'http2';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}
  async create(createTagDto: CreateTagDto) {
    const res = await this.tagRepository.save(createTagDto);

    if (!res) {
      return undefined;
    }

    return res;
  }

  async findAll() {
    const res = await this.tagRepository.find({});

    if (!res) return undefined;

    return res;
  }

  async findOne(id: number) {
    const res = await this.tagRepository.find({ where: { id: id } });

    if (!res) {
      return undefined;
    }

    return res;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const res = await this.tagRepository.update(id, { ...updateTagDto });

    if (!res) return undefined;

    return res;
  }

  async remove(id: number) {
    const res = this.tagRepository.delete(id);

    if (!res) {
      return undefined;
    }

    return HttpStatus.OK;
  }
}
