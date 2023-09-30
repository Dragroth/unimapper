import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class FieldsOfInterest extends Model {
    static get tableName() {return "fields_of_interest"}
}


export default FieldsOfInterest;