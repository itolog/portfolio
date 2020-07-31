import { BaseController } from '../shared/controllers/BaseController';
import { Request, Response } from 'express';

export class HomeController extends BaseController {
  public initRouter() {
    this.router.get(`${this.prefix}/home`, this.index);
  }

  public async index(req: Request, res: Response) {
    res.json({
      message: 'HOME API',
    });
  }
}
