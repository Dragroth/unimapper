"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsOfStudy_models_1 = __importDefault(require("../models/fieldsOfStudy.models"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class FieldsOfStudyController {
    findOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const fieldOfStudy = yield fieldsOfStudy_models_1.default.query()
                .findById(req.params.id);
            if (!fieldOfStudy) {
                return next();
            }
            else {
                return res.status(200).send(fieldOfStudy);
            }
        });
    }
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const fieldOfStudy = yield fieldsOfStudy_models_1.default.query();
            res.status(200).send(fieldOfStudy);
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Univeristy final model
            const { name } = req.body;
            const fieldOfStudy = yield fieldsOfStudy_models_1.default.query()
                .insert({ name });
            return res.status(201).send(fieldOfStudy);
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Univeristy final model
            const { name } = req.body;
            const fieldOfStudy = yield fieldsOfStudy_models_1.default.query()
                .findById(req.params.id)
                .patch({ name });
            if (fieldOfStudy) {
                return res.status(200).send();
            }
            else {
                res.status(500).send();
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const fieldOfStudy = yield fieldsOfStudy_models_1.default.query()
                .deleteById(req.params.id);
            if (!fieldOfStudy) {
                res.status(500).send();
            }
            else {
                return res.status(200).send();
            }
        });
    }
}
exports.default = FieldsOfStudyController;
