"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db.config"));
const objection_1 = require("objection");
objection_1.Model.knex(db_config_1.default);
class Cities extends objection_1.Model {
    static get tableName() { return "cities"; }
}
exports.default = Cities;
