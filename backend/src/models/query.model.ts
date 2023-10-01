import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Query extends Model {
    static get all() {
        return knex.raw(`
            SELECT *
            FROM cities
                     INNER JOIN universities ON cities.id = universities.city_id
                     INNER JOIN departaments ON universities.id = departaments.university_id
                     INNER JOIN fields_of_study ON departaments.id = fields_of_study.departament_id;
        `)
            .then((result) => result[0])
            .catch((e) => console.error(e));
    }
}


export default Query;
