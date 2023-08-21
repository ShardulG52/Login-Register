"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    try {
        const myKey = process.env.SECRET_CODE;
        const requestHeader = req.header("Authorization");
        const token = requestHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, myKey);
        next();
    }
    catch (error) {
        next("Not Authorized");
    }
};
exports.authenticate = authenticate;
