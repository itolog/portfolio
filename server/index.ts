import next from 'next';
import { App } from './App';

import { HomeController } from './home/home.controller';

const dev = process.env.NODE_ENV !== 'production';

const appNext = next({ dev });
const handle = appNext.getRequestHandler();

const port = Number(process.env.PORT);

appNext.prepare().then(() => {
  const app = new App({
    port,
    middleWares: [],
    controllers: [new HomeController()],
    handle,
  });

  app.init();
});
