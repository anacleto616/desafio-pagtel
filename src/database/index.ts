import knexConfig from '@config/knexfile';
import knex from 'knex';

const knexLib = knex(knexConfig);

export default knexLib;
