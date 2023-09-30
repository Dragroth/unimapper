import {Router} from "express";
import CitiesController from "../controllers/cities.controller";
import ApiMiddlewares from "../midllewares/api.middlewares";
import ErrorsMiddlewares from "../midllewares/errors.middlewares";


class CitiesRoutes {
    router: Router = Router();
    citiesController: CitiesController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.citiesController = new CitiesController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.citiesController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.citiesController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.citiesController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.citiesController.remove);
    }
} export default new CitiesRoutes().router;