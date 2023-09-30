import {NextFunction, Request, Response} from 'express';
import Universities from '../models/university.models';
import dotenv from 'dotenv';
dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class UnisController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        if (req.headers["x-api-key"] !== apiKey) {
            return res.status(403).send();
        }
        const university: Universities | undefined = await Universities.query()
            .findById(req.params.id);
        if (!university) {
            return next();
        } else {
            return res.status(200).send(university);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        if (req.headers["x-api-key"] !== apiKey) {
            return res.status(403).send();
        }
        const universities: Universities[] = await Universities.query();
        res.status(200).send(universities);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        if (req.headers["x-api-key"] !== apiKey) {
            return res.status(403).send();
        }
        // TODO: Univeristy final model
        const {name, city, dupa, something} = req.body;
        const university: Universities = await Universities.query()
            .insert({
            name, city,
        });

        return res.status(201).send(university);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        if (req.headers["x-api-key"] !== apiKey) {
            return res.status(403).send();
        }
        // TODO: Univeristy final model
        const {name, city, dupa, something} = req.body;
        const university = await Universities.query()
            .findById(req.params.id)
            .patch({
                name, city
            });

        if (university) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        if (req.headers["x-api-key"] !== apiKey) {
            return res.status(403).send();
        }
        const university = await Universities.query()
            .deleteById(req.params.id);
        if (!university) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}