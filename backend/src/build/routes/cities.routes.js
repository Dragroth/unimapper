"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cities_controller_1 = __importDefault(require("../controllers/cities.controller"));
const api_middlewares_1 = __importDefault(require("../midllewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../midllewares/errors.middlewares"));
class CitiesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.citiesController = new cities_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.findAll);
        this.router.get(`/:id`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.create);
        this.router.put(`/update/:id`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.remove);
    }
}
exports.default = new CitiesRoutes().router;
