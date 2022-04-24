import { IResponse } from './ResponseInterface';

export interface IController<IRequest = null> {
  handle(req?: IRequest): Promise<IResponse>;
}
