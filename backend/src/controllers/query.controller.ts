import {NextFunction, Request, Response} from 'express';
import Jobs from '../models/jobs.models';
import dotenv from 'dotenv';
import Query from "../models/query.model";
dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class QueryController {
    async all(req: Request, res: Response): Promise<void> {
        if (req.headers["x-api-key"] !== apiKey) {
            res.status(403).send();
        }
        const [query] = await Promise.all([Query.all]);
        res.status(200).send(query);
    }
}