"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userServiceController_1 = require("../controller/userServiceController");
const joiValidation_1 = require("../validation/joiValidation");
const userRouter = express_1.default.Router();
userRouter.post("/register", joiValidation_1.validate, userServiceController_1.registerUserController);
userRouter.post("/login", userServiceController_1.loginUserController);
exports.default = userRouter;
