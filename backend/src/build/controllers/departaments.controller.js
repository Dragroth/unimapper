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
const departaments_models_1 = __importDefault(require("../models/departaments.models"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DepartamentsController {
    findOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const departament = yield departaments_models_1.default.query()
                .findById(req.params.id);
            if (!departament) {
                return next();
            }
            else {
                return res.status(200).send(departament);
            }
        });
    }
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const departaments = yield departaments_models_1.default.query();
            res.status(200).send(departaments);
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Univeristy final model
            const { name } = req.body;
            const departament = yield departaments_models_1.default.query()
                .insert({ name });
            return res.status(201).send(departament);
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Univeristy final model
            const { name } = req.body;
            const departament = yield departaments_models_1.default.query()
                .findById(req.params.id)
                .patch({ name });
            if (departament) {
                return res.status(200).send();
            }
            else {
                res.status(500).send();
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const departament = yield departaments_models_1.default.query()
                .deleteById(req.params.id);
            if (!departament) {
                res.status(500).send();
            }
            else {
                return res.status(200).send();
            }
        });
    }
}
exports.default = DepartamentsController;
