import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import log4js from 'koa-log4';
import router from './lib/router.js';

const infoLogger = log4js.getLogger('info');
infoLogger.level = 'info';

const app = new Koa();
app.use(koaBody({ multipart: true }));
app.use(cors());
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8000, () => {
  infoLogger.info('HKO Weather API 正運行於 port 8000 ∠( ᐛ 」∠)＿');
});
