import {Router} from "express";
import UniversitiesController from "../controllers/universities.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class UniversitiesRoutes {
    router: Router = Router();
    unisController: UniversitiesController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.unisController = new UniversitiesController();
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
} export default new UniversitiesRoutes().router;