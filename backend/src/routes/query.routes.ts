import {Router} from "express";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";
import QueryController from "../controllers/query.controller";


class QueryRoutes {
    router: Router = Router();
    queryController: QueryController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.queryController = new QueryController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/` , this.apiMiddlewares.redirectOnWrongKey, this.queryController.all);
    }
} export default new QueryRoutes().router;