"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const dotenv_1 = require("dotenv");
const movieData_1 = __importDefault(require("./routes/movieData"));
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/LoginRegister");
app.use("/user", userRouter_1.default);
app.use("/movie", movieData_1.default);
app.listen(3000);
