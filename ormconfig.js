module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  seeds: ['dist/users/entities/seeds/*.seed{.ts,.js}'],
  synchronize: false,
  entities: ['dist/entity/**/*.ts'],
  migrations: ['database/migrations/**/*.ts'],
  factory: ['dist/**/*.factory.{ts,js}'],
  subscribers: ['dist/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'dist/entity',
    migrationsDir: 'dist/migrations',
    subscribersDir: 'dist/subscriber',
  },
};
