import ServerError from '../errors/serverError';
import { Response } from '../interfaces/ResponseInterface';

export const badRequest = (error: Error): Response => ({
  statusCode: 400,
  body: { error: error.message },
});

export const serverError = (error: Error): Response => ({
  statusCode: 500,
  body: new ServerError(error.stack as string),
});

export const created = (data: unknown): Response => ({
  statusCode: 201,
  body: data,
});

export const ok = (data: unknown): Response => ({
  statusCode: 200,
  body: data,
});

export const notFound = (error: Error): Response => ({
  statusCode: 404,
  body: { error: error.message },
});
