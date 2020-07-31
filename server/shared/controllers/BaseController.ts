import { Router } from 'express';

export abstract class BaseController {
  public path = '/';
  public prefix = '/api';
  public router = Router();

  public routes = [];

  constructor() {
    this.initRouter();
  }

  public initRouter() {}
}
