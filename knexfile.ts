import { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};

export default knexConfig;