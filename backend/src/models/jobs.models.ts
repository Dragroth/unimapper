import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Jobs extends Model {
    static get tableName() {return "jobs"}
}


export default Jobs;