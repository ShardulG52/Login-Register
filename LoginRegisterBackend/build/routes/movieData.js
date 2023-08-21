"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieDataServiceController_1 = require("../controller/movieDataServiceController");
const authenticate_1 = require("../middleware/authenticate");
const movieDataRouter = express_1.default.Router();
movieDataRouter.get("/data", authenticate_1.authenticate, movieDataServiceController_1.getMovieDataController);
exports.default = movieDataRouter;
