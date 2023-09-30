import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Cities extends Model {
    static get tableName() {return "cities"}
}


export default Cities;