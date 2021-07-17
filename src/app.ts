import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import { RegisterRoutes } from '../build/routes';

export const app = new Koa();

app.use(bodyParser());

const router = new Router();
RegisterRoutes(router);
app.use(router.routes()).use(router.allowedMethods());
