import * as Express from 'express';
import * as bodyParser from 'body-parser';
import { router as indexRouter } from './route/index';
import { logger } from './lib/logger';
import { NotFoundError } from './model/Error';

export const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.use((req, res, next) => {
  next(new NotFoundError(req.originalUrl));
});

app.use((err, req, res, next) => {
  logger.error(err);

  res.locals.message = err.message;
  res.locals.error = err;

  res.sendStatus(err.status || 500);
});
