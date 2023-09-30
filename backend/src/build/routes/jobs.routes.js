"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobs_controller_1 = __importDefault(require("../controllers/jobs.controller"));
const api_middlewares_1 = __importDefault(require("../midllewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../midllewares/errors.middlewares"));
class JobsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.jobsController = new jobs_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.findAll);
        this.router.get(`/:id`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.create);
        this.router.put(`/update/:id`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.remove);
    }
}
exports.default = new JobsRoutes().router;
