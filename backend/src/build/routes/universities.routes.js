"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const universities_controller_1 = __importDefault(require("../controllers/universities.controller"));
const api_middlewares_1 = __importDefault(require("../midllewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../midllewares/errors.middlewares"));
class UniversitiesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.unisController = new universities_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.findAll);
        this.router.get(`/:id`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.create);
        this.router.put(`/update/:id`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.remove);
    }
}
exports.default = new UniversitiesRoutes().router;
