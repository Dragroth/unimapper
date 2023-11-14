import {Request, Response} from 'express';
import dotenv from 'dotenv';
import Query from "../models/query.model";
import Table from "../utils/table.utils"
dotenv.config();


export default class QueryController {
    async allFieldsOfStudy(req: Request, res: Response): Promise<void> {
        const result: Promise<any> = Query.all;
        res.status(200).send(result);
    }

    async selectedData(req: Request, res: Response): Promise<void> {
        try {
            const fieldsOfStudy: Promise<void> = await Query.all;
            const {resultsData, thresholdsData} = await req.body;
            const cities = thresholdsData.cityValue;
            const userThreshold: number = Table.countThreshold(resultsData);
            const arrayOfFields = Table.filterFieldsOfStudy(fieldsOfStudy, cities, userThreshold, 0.6);
            const result = arrayOfFields.map((element: {newThreshold: number}): Array<Object> => {
                element.newThreshold = userThreshold;
                return element;
            })
            res.status(200).send(result);
        } catch {
            res.status(500).json({
                error: 'An error occurred'
            });
        }
    }
}
