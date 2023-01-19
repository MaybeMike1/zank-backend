import { ProductTagsLink } from 'src/products_tags/entity/products_tags.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @OneToMany(() => ProductTagsLink, (productTagLink) => productTagLink.tags)
  productTagLink: ProductTagsLink;
}
