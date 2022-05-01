import { Response } from './ResponseInterface';

export interface Controller<Request = null> {
  handle(req?: Request): Promise<Response>;
}
