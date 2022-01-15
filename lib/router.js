const fs = require('fs');
const Router = require('koa-router');
const log4js = require('koa-log4');
const HongKongWeather = require('hongkong-weather');
const WeatherDay = require('hongkong-weather-day');

const hkWeather = new HongKongWeather();
const infoLogger = log4js.getLogger('info');
infoLogger.level = 'info';

const errorLogger = log4js.getLogger('error');
errorLogger.level = 'error';

const router = new Router();
router.get('/', async (ctx, next) => {
  ctx.set('Content-Type', 'application/json; charset=utf-8');
  const forecast = await hkWeather.getCurrent();
  ctx.body = JSON.stringify(forecast);
  infoLogger.info('Request Type: current weather');
  infoLogger.info(forecast);
});

router.get('/rainfall', async (ctx, next) => {
  ctx.set('Content-Type', 'application/json; charset=utf-8');
  const query = ctx.request.query;
  if(query.date){
    const rainfall = await WeatherDay.getRainfall(query.date);
    ctx.body = rainfall;
  }else{
    ctx.body = 'You should input the date';
  }
});

router.get('/radiation', async (ctx, next) => {
  ctx.body = 'Coming soon';
});

router.get('/sunrise', async (ctx, next) => {
  ctx.body = 'Coming soon';
});

router.get('/tidal', async (ctx, next) => {
  ctx.body = 'Coming soon';
});

router.get('/warnings', async (ctx, next) => {
  ctx.body = 'Coming soon';
});

module.exports = router;
