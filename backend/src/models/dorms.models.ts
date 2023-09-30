import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Dorms extends Model {
    static get tableName() {return "dorms"}
}


export default Dorms;