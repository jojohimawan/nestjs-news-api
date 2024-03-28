import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source: string;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  urltoimage: string;

  @Column()
  publishedat: Date;

  @Column()
  content: string;
}
