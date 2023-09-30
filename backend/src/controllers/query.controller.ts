import {Request, Response} from 'express';
import dotenv from 'dotenv';
import Query from "../models/query.model";

dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class QueryController {
    async all(req: Request, res: Response): Promise<void> {
        const [query] = await Promise.all([Query.all]);
        res.status(200).send(query);
    }

    async selectedData(req: Request, res: Response) {
        const result = await req.body;
        res.status(200).send(result);
    }
}