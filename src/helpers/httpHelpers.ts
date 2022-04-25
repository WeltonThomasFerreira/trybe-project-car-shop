import ServerError from '../errors/serverError';
import { IResponse } from '../interfaces/ResponseInterface';

export const badRequest = (error: Error): IResponse => ({
  statusCode: 400,
  body: { error: error.message },
});

export const serverError = (error: Error): IResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string),
});

export const created = (data: unknown): IResponse => ({
  statusCode: 201,
  body: data,
});

export const ok = (data: unknown): IResponse => ({
  statusCode: 200,
  body: data,
});

export const notFound = (error: Error): IResponse => ({
  statusCode: 404,
  body: { error: error.message },
});