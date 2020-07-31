import express, { Application } from 'express';
import Debug from 'debug';

const debug = Debug('server');

const dev = process.env.NODE_ENV !== 'production';

export class App {
  public app: Application;
  public port = 4000;

  constructor(appInit: {
    port: number;
    middleWares: any[];
    controllers: any[];
    handle: any;
  }) {
    this.app = express();

    this.middlewares(appInit.middleWares);

    this.routes(appInit.controllers);

    this.app.all('*', (req, res) => {
      return appInit.handle(req, res);
    });
  }

  public middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  public routes(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  public init() {
    this.app.listen(this.port, () => {
      if (dev) {
        debug(`: listen http://localhost:${this.port}`);
      }
    });
  }
}
