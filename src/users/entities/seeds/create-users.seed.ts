import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users = factory(User)().createMany(20);

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(await users)
      .execute();
  }
}
