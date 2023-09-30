import {NextFunction, Request, Response} from 'express';
import Departaments from '../models/departaments.models';
import dotenv from 'dotenv';
dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class DepartamentsController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const departament: Departaments | undefined = await Departaments.query()
            .findById(req.params.id);
        if (!departament) {
            return next();
        } else {
            return res.status(200).send(departament);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const departaments: Departaments[] = await Departaments.query();
        res.status(200).send(departaments);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name} = req.body;
        const departament: Departaments = await Departaments.query()
            .insert({name});

        return res.status(201).send(departament);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name} = req.body;
        const departament = await Departaments.query()
            .findById(req.params.id)
            .patch({name});

        if (departament) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const departament = await Departaments.query()
            .deleteById(req.params.id);
        if (!departament) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}