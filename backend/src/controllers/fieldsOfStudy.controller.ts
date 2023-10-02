import {NextFunction, Request, Response} from 'express';
import FieldsOfStudy from "../models/fieldsOfStudy.models";
import dotenv from 'dotenv';
dotenv.config();


export default class FieldsOfStudyController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const fieldOfStudy: FieldsOfStudy | undefined = await FieldsOfStudy.query()
            .findById(req.params.id);
        if (!fieldOfStudy) {
            return next();
        } else {
            return res.status(200).send(fieldOfStudy);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const fieldOfStudy: FieldsOfStudy[] = await FieldsOfStudy.query();
        res.status(200).send(fieldOfStudy);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name} = req.body;
        const fieldOfStudy: FieldsOfStudy = await FieldsOfStudy.query()
            .insert({name});

        return res.status(201).send(fieldOfStudy);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name} = req.body;
        const fieldOfStudy = await FieldsOfStudy.query()
            .findById(req.params.id)
            .patch({name});

        if (fieldOfStudy) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const fieldOfStudy = await FieldsOfStudy.query()
            .deleteById(req.params.id);
        if (!fieldOfStudy) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}