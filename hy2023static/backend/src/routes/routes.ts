import {Application} from "express";
import homeRoutes from "./home.routes";
import unisRoutes from "./unis.routes";


export default class Routes {
    constructor(app: Application) {
        app.use("/api", homeRoutes);
        app.use("/api/unis", unisRoutes);
    }
}
