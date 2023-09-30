import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class FieldsOfStudy extends Model {
    static get tableName() {return "fields_of_study"}
}


export default FieldsOfStudy;