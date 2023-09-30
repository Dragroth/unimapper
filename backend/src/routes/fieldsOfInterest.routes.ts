import {Router} from "express";
import FieldsOfInterestController from "../controllers/fieldsOfInterest.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class FieldsOfInterest {
    router: Router = Router();
    fieldsOfInterestController: FieldsOfInterestController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.fieldsOfInterestController = new FieldsOfInterestController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfInterestController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfInterestController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfInterestController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfInterestController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.fieldsOfInterestController.remove);
    }
} export default new FieldsOfInterest().router;