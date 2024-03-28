import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  async findOne(id: number): Promise<Article> {
    return this.articlesRepository.findOne({ where: { id } });
  }

  async create(article: Partial<Article>): Promise<Article> {
    const newarticle = this.articlesRepository.create(article);
    return this.articlesRepository.save(newarticle);
  }

  async update(id: number, article: Partial<Article>): Promise<Article> {
    await this.articlesRepository.update(id, article);
    return this.articlesRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
