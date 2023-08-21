"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const userJoi_1 = require("../Schema/userJoi");
const validate = (req, res, next) => {
    const { error } = userJoi_1.userSchema.validate(req.body);
    if (error) {
        return res.json(error.message);
    }
    else {
        next();
    }
};
exports.validate = validate;
