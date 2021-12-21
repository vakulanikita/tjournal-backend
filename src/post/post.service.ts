import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }

    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }

    return this.repository.delete(id);
  }
}
