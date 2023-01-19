import { Product } from 'src/products/entities/product.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTagsLink {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tag, (tag) => tag.productTagLink)
  @JoinColumn({ name: 'productLinkId' })
  tags: Tag[];

  @ManyToOne(() => Product, (product) => product.productTagsLink)
  products: Product[];
}
