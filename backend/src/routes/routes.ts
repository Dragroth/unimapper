import {Application} from "express";
import homeRoutes from "./home.routes";
import unisRoutes from "./universities.routes";
import citiesRoutes from "./cities.routes";
import departamentsRoutes from "./departaments.models";
import dormsRoutes from "./dorms.routes";
import fieldsOfStudyRoutes from "./fieldsOfStudy.routes";
import fieldsOfInterestRoutes from "./fieldsOfInterest.routes";


export default class Routes {
    constructor(app: Application) {
        app.use("/api", homeRoutes);
        app.use("/api/unis", unisRoutes);
        app.use("/api/cities", citiesRoutes);
        app.use("/api/departaments", departamentsRoutes);
        app.use("/api/dorms", dormsRoutes);
        app.use("/api/studies", fieldsOfStudyRoutes);
        app.use("/api/interest", fieldsOfInterestRoutes);
        app.use("/api/jobs", departamentsRoutes);
    }
}
