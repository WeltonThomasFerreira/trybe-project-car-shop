import { IResponse } from './ResponseInterface';

export interface IController<IRequest> {
  handle(req: IRequest): Promise<IResponse>;
}
