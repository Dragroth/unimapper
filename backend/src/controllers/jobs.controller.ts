import {NextFunction, Request, Response} from 'express';
import Jobs from '../models/jobs.models';
import dotenv from 'dotenv';
dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class JobsController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const job: Jobs | undefined = await Jobs.query()
            .findById(req.params.id);
        if (!job) {
            return next();
        } else {
            return res.status(200).send(job);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const jobs: Jobs[] = await Jobs.query();
        res.status(200).send(jobs);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name, salary, fieldsOfStudyID} = req.body;
        const job: Jobs = await Jobs.query()
            .insert({
                name, salary, 
                fieldsOfStudyID
            });

        return res.status(201).send(job);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name, salary, fieldsOfStudyID} = req.body;
        const job = await Jobs.query()
            .findById(req.params.id)
            .patch({
                name, salary, 
                fieldsOfStudyID
            });

        if (job) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const job = await Jobs.query()
            .deleteById(req.params.id);
        if (!job) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}