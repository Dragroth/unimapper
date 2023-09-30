import {Router} from "express";
import UnisController from "../controllers/unis.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class UnisRoutes {
    router: Router = Router();
    unisController: UnisController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.unisController = new UnisController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.unisController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.unisController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.unisController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.unisController.remove);
    }
} export default new UnisRoutes().router;