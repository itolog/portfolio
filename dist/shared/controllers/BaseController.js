"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const express_1 = require("express");
class BaseController {
    constructor() {
        this.path = '/';
        this.prefix = '/api';
        this.router = express_1.Router();
        this.routes = [];
        this.initRouter();
    }
    initRouter() { }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map