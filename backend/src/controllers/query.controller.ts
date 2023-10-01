import {Request, Response} from 'express';
import dotenv from 'dotenv';
import Query from "../models/query.model";
import {countThreshold} from "../utils/countThreshold";

dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class QueryController {
    async all(req: Request, res: Response): Promise<void> {
        const [query] = await Promise.all([Query.all]);
        res.status(200).send(query);
    }

    async selectedData(req: Request, res: Response): Promise<void> {
        const [fieldsOfStudy] = await Promise.all([Query.all]);
        const exams = await req.body;
        const cities = exams.thresholdsData.cityValue;
        const userThreshold: number = countThreshold(exams);
        let result: Array<Object> = [];
        for (const field of fieldsOfStudy) {
            if (cities.length) {
                if (((field.threshold * 0.6) < userThreshold) && (cities.includes(field.location))) {
                    result.push(field);
                }
            } else {
                if ((field.threshold * 0.6) < userThreshold) {
                    result.push(field);
                }
            }
        } res.status(200).send(result);
    }
}