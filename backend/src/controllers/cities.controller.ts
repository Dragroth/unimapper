import {NextFunction, Request, Response} from 'express';
import Cities from '../models/cities.models';
import dotenv from 'dotenv';
dotenv.config();

const apiKey: string | undefined = process.env.API_KEY;

export default class CitiesController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const city: Cities | undefined = await Cities.query()
            .findById(req.params.id);
        if (!city) {
            return next();
        } else {
            return res.status(200).send(city);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const cities: Cities[] = await Cities.query();
        res.status(200).send(cities);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name} = req.body;
        const city: Cities = await Cities.query()
            .insert({name});

        return res.status(201).send(city);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        // TODO: Univeristy final model
        const {name} = req.body;
        const city = await Cities.query()
            .findById(req.params.id)
            .patch({name});

        if (city) {
            return res.status(200).send();
        } else {
            res.status(500).send();
        }
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const city = await Cities.query()
            .deleteById(req.params.id);
        if (!city) {
            res.status(500).send();
        } else {
            return res.status(200).send();
        }
    }
}