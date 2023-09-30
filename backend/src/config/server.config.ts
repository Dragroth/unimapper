import dotenv from 'dotenv';
dotenv.config();

export const serverConfig: {env: string | undefined, port: string | number, address: string} = {
    env: process.env.NODE_ENV,
    port: process.env.SERVER_PORT || 1337,
    address: process.env.SERVER_ADDRESS || "localhost"
};