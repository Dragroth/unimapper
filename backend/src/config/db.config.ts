import knexfile from '../database/knexfile';
import knex from 'knex';

export default knex(knexfile);

// const env = process.env.NODE_ENV || "development";
// export default knex(knexfile[env as keyof typeof knexfile]);