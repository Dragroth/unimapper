import {Router} from "express";
import JobsController from "../controllers/jobs.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class JobsRoutes {
    router: Router = Router();
    jobsController: JobsController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.jobsController = new JobsController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.jobsController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.jobsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.jobsController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.jobsController.remove);
    }
} export default new JobsRoutes().router;