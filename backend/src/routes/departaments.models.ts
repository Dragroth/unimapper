import {Router} from "express";
import DepartamentsController from "../controllers/departaments.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class UnisRoutes {
    router: Router = Router();
    departamentsController: DepartamentsController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.departamentsController = new DepartamentsController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.departamentsController.remove);
    }
} export default new UnisRoutes().router;