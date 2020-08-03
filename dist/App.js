"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('server');
const dev = process.env.NODE_ENV !== 'production';
class App {
    constructor(appInit) {
        this.port = 4000;
        this.app = express_1.default();
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.app.all('*', (req, res) => {
            return appInit.handle(req, res);
        });
    }
    middlewares(middleWares) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }
    routes(controllers) {
        controllers.forEach((controller) => {
            this.app.use(controller.path, controller.router);
        });
    }
    init() {
        this.app.listen(this.port, () => {
            if (dev) {
                debug(`: listen http://localhost:${this.port}`);
            }
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map