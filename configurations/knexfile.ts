import { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'pagtel',
    password: 'pagtelpass',
    database: 'pagteldb',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: '../src/database/migrations',
  },
  seeds: {
    directory: '../src/database/seeds',
  },
};

export default knexConfig;
