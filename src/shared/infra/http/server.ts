import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import '@shared/infra/typeorm';
import routes from './routes';
import setupSwagger from '@shared/config/swagger'

const app = express();
setupSwagger(app);
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3000);
