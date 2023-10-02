import {NextFunction, Request, Response} from 'express';
import Dorms from '../models/dorms.models';
import dotenv from 'dotenv';
dotenv.config();


export default class DormsController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const dorm: Dorms | undefined = await Dorms.query()
            .findById(req.params.id);
        if (!dorm) {
            return next();
        } else {
            return res.status(200).send(dorm);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const dorms: Dorms[] = await Dorms.query();
        res.status(200).send(dorms);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        const dorm: Dorms = await Dorms.query()
            .insert({name});

        return res.status(201).send(dorm);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        const dorm = await Dorms.query()
            .findById(req.params.id)
            .patch({name});

        if (dorm) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const dorm = await Dorms.query()
            .deleteById(req.params.id);
        if (!dorm) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}