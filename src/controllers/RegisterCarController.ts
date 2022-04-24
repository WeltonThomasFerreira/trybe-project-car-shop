import { serverError, created, badRequest } from '../helpers/httpHelpers';
import { Car } from '../interfaces/CarInterface';
import { IResponse } from '../interfaces/ResponseInterface';
import { Model } from '../interfaces/ModelInterface';
import { Service } from '../interfaces/ServiceInterface';
import { IController } from '../interfaces/ControllerInterface';

export interface IRequest {
  body: Car;
}

export default class RegisterCarController implements IController<IRequest> {
  private readonly _carModel;

  private readonly _carValidation;

  constructor(model: Model<Car>, service: Service<Car>) {
    this._carModel = model;
    this._carValidation = service;
  }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const error = await this._carValidation.validate(req.body);
      if (error) return badRequest(error);
      const response = await this._carModel.create(req.body);
      return created(response);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
