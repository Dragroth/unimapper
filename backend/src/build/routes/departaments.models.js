"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departaments_controller_1 = __importDefault(require("../controllers/departaments.controller"));
const api_middlewares_1 = __importDefault(require("../midllewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../midllewares/errors.middlewares"));
class DepartamentsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.departamentsController = new departaments_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.findAll);
        this.router.get(`/:id`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.create);
        this.router.put(`/update/:id`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.remove);
    }
}
exports.default = new DepartamentsRoutes().router;
