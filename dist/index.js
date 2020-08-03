"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const App_1 = require("./App");
const home_controller_1 = require("./home/home.controller");
const dev = process.env.NODE_ENV !== 'production';
const appNext = next_1.default({ dev });
const handle = appNext.getRequestHandler();
const port = Number(process.env.PORT);
appNext.prepare().then(() => {
    const app = new App_1.App({
        port,
        middleWares: [],
        controllers: [new home_controller_1.HomeController()],
        handle,
    });
    app.init();
});
//# sourceMappingURL=index.js.map