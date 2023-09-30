import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Universities extends Model {
    static get tableName() {return "universities"}
}


export default Universities;