import {Knex} from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const database = {
    client: `mysql2`,
    connection: {
        host: process.env.DB_HOST || `localhost`,
        user: process.env.DB_USER || `root`,
        password: process.env.DB_PASS || 'ppa',
        database: process.env.DB_NAME || `hy23`,
    },
    migrations: {
        tableName: `migrations`,
        directory: `./migrations`,
    },
    seeds: {
        directory: `./seeds`,
    },
} as Knex.Config;

export = database;