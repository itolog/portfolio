"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const BaseController_1 = require("../shared/controllers/BaseController");
class HomeController extends BaseController_1.BaseController {
    initRouter() {
        this.router.get(`${this.prefix}/home`, this.index);
    }
    async index(req, res) {
        res.json({
            message: 'HOME API',
        });
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map