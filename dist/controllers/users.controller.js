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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.findAll();
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `User doesn't exist with id:${id}`
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const existEmail = yield user_model_1.default.findOne({
            where: { email }
        });
        if (existEmail)
            return res.status(400).json({ msg: `The email already exist: ${email}` });
        const user = yield user_model_1.default.create({
            name,
            email
        });
        yield user.save();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Contact to the administrator'
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = yield user_model_1.default.findByPk(id);
        if (!user)
            return res.status(400).json({ msg: `User doesn't exist with id:${id}` });
        const existEmail = yield user_model_1.default.findOne({
            where: { email }
        });
        if (existEmail)
            return res.status(400).json({ msg: `The email already exist: ${email}` });
        yield user.update({
            name,
            email
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Contact to the administrator'
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (!user)
        return res.status(400).json({ msg: `User doesn't exist with id:${id}` });
    yield user.destroy();
    res.json(user);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map