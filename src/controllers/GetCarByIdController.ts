import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { IController } from '../interfaces/ControllerInterface';
import { IResponse } from '../interfaces/ResponseInterface';
import { badRequest, notFound, ok, serverError } from '../helpers/httpHelpers';
import { Service } from '../interfaces/ServiceInterface';
import { INVALID_ID } from '../errors/requestErrors';

export interface IRequest {
  params: {
    id?: string;
  };
}

export default class GetCarByIdController implements IController<IRequest> {
  private readonly _carModel;

  private readonly _idCarValidator;

  constructor(model: Model<Car>, service: Service<unknown>) {
    this._carModel = model;
    this._idCarValidator = service;
  }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const error = await this._idCarValidator.validate(req.params);
      if (error) return badRequest(error);
      const response = await this._carModel.readOne(req.params.id as string);
      if (!response) return notFound(INVALID_ID);
      return ok(response);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
