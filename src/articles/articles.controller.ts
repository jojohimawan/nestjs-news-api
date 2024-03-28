import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  // get all articles
  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  // get one article by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Article> {
    const article = await this.articlesService.findOne(id);
    if (!article) {
      throw new NotFoundException('Article not found');
    } else {
      return article;
    }
  }

  // create a new article
  @Post()
  async create(@Body() article: Article): Promise<Article> {
    return this.articlesService.create(article);
  }

  // update an article by id
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() article: Article,
  ): Promise<any> {
    return this.articlesService.update(id, article);
  }

  // delete an article by id
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    // handle error if article doesnt exist
    const article = await this.articlesService.findOne(id);
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return this.articlesService.delete(id);
  }
}
