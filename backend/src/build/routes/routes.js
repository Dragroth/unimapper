"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = __importDefault(require("./home.routes"));
const universities_routes_1 = __importDefault(require("./universities.routes"));
const cities_routes_1 = __importDefault(require("./cities.routes"));
const departaments_models_1 = __importDefault(require("./departaments.models"));
const dorms_routes_1 = __importDefault(require("./dorms.routes"));
const fieldsOfStudy_routes_1 = __importDefault(require("./fieldsOfStudy.routes"));
const fieldsOfInterest_routes_1 = __importDefault(require("./fieldsOfInterest.routes"));
class Routes {
    constructor(app) {
        app.use("/api", home_routes_1.default);
        app.use("/api/unis", universities_routes_1.default);
        app.use("/api/cities", cities_routes_1.default);
        app.use("/api/departaments", departaments_models_1.default);
        app.use("/api/dorms", dorms_routes_1.default);
        app.use("/api/studies", fieldsOfStudy_routes_1.default);
        app.use("/api/interest", fieldsOfInterest_routes_1.default);
        app.use("/api/jobs", departaments_models_1.default);
    }
}
exports.default = Routes;
