import { ProductTagsLink } from 'src/products_tags/entity/products_tags.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  /* images: string[]; */
  @Column()
  rentTimeHourly: boolean;
  @Column()
  rentTimeDaily: boolean;
  @Column()
  rentTimeWeekly: boolean;
  @Column()
  rentTimeMonthly: boolean;
  @Column({ type: 'float' })
  rentPriceHourly: number;
  @Column({ type: 'float' })
  rentPriceDaily: number;
  @Column({ type: 'float' })
  rentPriceWeekly: number;
  @Column({ type: 'float' })
  rentPriceMonthly: number;
  @Column()
  active: boolean;

  @OneToMany(
    () => ProductTagsLink,
    (productTagsLink) => productTagsLink.products,
  )
  productTagsLink: ProductTagsLink;
}
