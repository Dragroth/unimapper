"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dorms_controller_1 = __importDefault(require("../controllers/dorms.controller"));
const api_middlewares_1 = __importDefault(require("../midllewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../midllewares/errors.middlewares"));
class DormsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.dormsController = new dorms_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.findAll);
        this.router.get(`/:id`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.create);
        this.router.put(`/update/:id`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.remove);
    }
}
exports.default = new DormsRoutes().router;
