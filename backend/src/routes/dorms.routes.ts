import {Router} from "express";
import DormsController from "../controllers/dorms.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class DormsRoutes {
    router: Router = Router();
    dormsController: DormsController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.dormsController = new DormsController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.dormsController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.dormsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.dormsController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.dormsController.remove);
    }
} export default new DormsRoutes().router;
