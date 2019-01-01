const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const log4js = require('koa-log4')
const router = require('./lib/router');

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
