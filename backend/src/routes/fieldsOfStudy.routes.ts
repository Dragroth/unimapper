import {Router} from "express";
import CitiesController from "../controllers/cities.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";
import FieldsOfStudyController from "../controllers/fieldsOfStudy.controller";


class FieldsOfStudyRoutes {
    router: Router = Router();
    fieldsOfStudyController: FieldsOfStudyController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.fieldsOfStudyController = new FieldsOfStudyController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfStudyController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfStudyController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfStudyController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfStudyController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfStudyController.remove);
    }
} export default new FieldsOfStudyRoutes().router;