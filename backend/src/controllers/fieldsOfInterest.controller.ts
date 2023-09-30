import {NextFunction, Request, Response} from 'express';
import FieldsOfInterest from "../models/fieldsOfInterest.models";
import dotenv from 'dotenv';
dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class FieldsOfInterestController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const fieldOfInterest: FieldsOfInterest | undefined = await FieldsOfInterest.query()
            .findById(req.params.id);
        if (!fieldOfInterest) {
            return next();
        } else {
            return res.status(200).send(fieldOfInterest);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const fieldOfInterest: FieldsOfInterest[] = await FieldsOfInterest.query();
        res.status(200).send(fieldOfInterest);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        const fieldOfInterest: FieldsOfInterest = await FieldsOfInterest.query()
            .insert({name});

        return res.status(201).send(fieldOfInterest);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        const fieldOfInterest = await FieldsOfInterest.query()
            .findById(req.params.id)
            .patch({name});

        if (fieldOfInterest) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const fieldOfInterest = await FieldsOfInterest.query()
            .deleteById(req.params.id);
        if (!fieldOfInterest) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}