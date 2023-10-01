import {Request, Response} from 'express';
import dotenv from 'dotenv';
import Query from "../models/query.model";
import {countThreshold} from "../utils/countThreshold";
import {filterFieldsOfStudy} from "../utils/filterFieldsOfStudy";

dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class QueryController {
    async all(req: Request, res: Response): Promise<void> {
        const [query] = await Promise.all([Query.all]);
        res.status(200).send(query);
    }

    async selectedData(req: Request, res: Response): Promise<void> {
        try {
            const fieldsOfStudy: Promise<any> = await Query.all;
            const {resultsData, thresholdsData} = await req.body;
            const cities = thresholdsData.cityValue;
            const userThreshold: number = countThreshold(resultsData);
            const result = filterFieldsOfStudy(fieldsOfStudy, cities, userThreshold);
            res.status(200).send(result);
        } catch {
            res.status(500).json({error: 'An error occurred'});
        }
    }
}