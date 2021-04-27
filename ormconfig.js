module.exports = {
  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: false,
  logging: false,

  migrations: [__dirname + '/dit/infra/database/migrations/*{.ts,.js}'],
  entities: [__dirname + '/dist/infra/database/models/*{.ts,.js}'],
  cli: {
    migrationsDir: './src/infra/database/migrations/',
    entitiesDir: './src/infra/database/models/'
  }
}
