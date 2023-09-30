import express, {Application} from "express";
import cors, {CorsOptions} from "cors";
import Routes from "./routes/routes";
import {serverConfig} from "./config/server.config";
import cookieParser from "cookie-parser";
import session from "express-session";

export default class Server {
    public address: string | undefined;
    public port: string | number;

    constructor(app: Application) {
        this.config(app);
        new Routes(app);
        this.address = serverConfig.address;
        this.port = serverConfig.port;
    }

    private config(app: Application): void {
        const corsOptions: CorsOptions = {
            origin: [
                "localhost:8000",
                "127.0.0.1:8000"
            ],
            methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
            allowedHeaders: ["set-cookie", "Content-Type", "Accept", "Origin",
                "X-Requested-With", "Authorization", "x-api-key",
                "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
            credentials: true,

            exposedHeaders: ["set-cookie", "Content-Type", "Accept", "Origin",
                "X-Requested-With", "Authorization", "x-api-key",
                "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
            preflightContinue: true
        };
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({extended: true, limit: "4mb"}));
        app.use(cookieParser());
        app.use(session({
            secret: "papasłoń",
            resave: false,
            saveUninitialized: false,
            unset: 'destroy',
            cookie: {
                maxAge: 60*30*100,
                secure: true
            }
        }));
    }
}
