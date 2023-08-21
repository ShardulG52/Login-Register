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
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = user;
    const hashedPass = yield bcrypt_1.default.hash(password, 10);
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPass,
    };
    const userCreated = yield userModel_1.userModel.create(newUser);
    if (userCreated) {
        return `${firstName} ${lastName} your account Created Successfully"`;
    }
    else {
        return "Account not created";
    }
});
exports.registerUser = registerUser;
const loginUser = (userCredentials) => __awaiter(void 0, void 0, void 0, function* () {
    const { email: emailEntered, password: passwordEntered } = userCredentials;
    const findUser = (yield userModel_1.userModel.findOne({ email: emailEntered }));
    if (!findUser) {
        return { message: "Email or password is not correct" };
    }
    const isPasswordCorrect = yield bcrypt_1.default.compare(passwordEntered, findUser.password);
    if (!isPasswordCorrect) {
        return { message: "Email or password is not correct" };
    }
    const myKey = process.env.SECRET_CODE;
    const payLoad = {
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        email: findUser.email,
    };
    const token = jsonwebtoken_1.default.sign(payLoad, myKey);
    return { token: token, message: "Logged In" };
});
exports.loginUser = loginUser;
