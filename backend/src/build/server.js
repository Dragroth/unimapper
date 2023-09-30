"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const server_config_1 = require("./config/server.config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
class Server {
    constructor(app) {
        this.config(app);
        new routes_1.default(app);
        this.address = server_config_1.serverConfig.address;
        this.port = server_config_1.serverConfig.port;
    }
    config(app) {
        const corsOptions = {
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
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true, limit: "4mb" }));
        app.use((0, cookie_parser_1.default)());
        app.use((0, express_session_1.default)({
            secret: "papasłoń",
            resave: false,
            saveUninitialized: false,
            unset: 'destroy',
            cookie: {
                maxAge: 60 * 30 * 100,
                secure: true
            }
        }));
    }
}
exports.default = Server;
