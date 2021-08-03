import Koa from 'koa';
import config from './config';
import addressRouter from './address/router';

const app = new Koa();

app.use(addressRouter.routes());

app.listen(config.port, () => {
  console.log('App is running on port', config.port);
});
