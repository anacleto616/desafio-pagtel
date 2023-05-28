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
    directory: `${__dirname}/src/database/migrations`,
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`,
  },
};

export default knexConfig;
