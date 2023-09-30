"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
};
module.exports = database;
