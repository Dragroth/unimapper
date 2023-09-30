import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Departaments extends Model {
    static get tableName() {return "departaments"}
}


export default Departaments;