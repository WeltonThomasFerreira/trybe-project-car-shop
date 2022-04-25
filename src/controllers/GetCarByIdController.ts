import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { Controller } from '../interfaces/ControllerInterface';
import { Response } from '../interfaces/ResponseInterface';
import { badRequest, notFound, ok, serverError } from '../helpers/httpHelpers';
import { Service } from '../interfaces/ServiceInterface';
import { invalidId } from '../errors/requestErrors';

export interface Request {
  params: {
    id?: string;
  };
}

export default class GetCarById implements Controller<Request> {
  private readonly _carRepository;

  private readonly _carIdValidator;

  constructor(model: Model<Car>, validator: Service<unknown>) {
    this._carRepository = model;
    this._carIdValidator = validator;
  }

  async handle(req: Request): Promise<Response> {
    try {
      const error = await this._carIdValidator.validate(req.params);
      if (error) return badRequest(error);
      const response = await this._carRepository.readOne(
        req.params.id as string,
      );
      if (response === null) return notFound(invalidId);
      return ok(response);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
