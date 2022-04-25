import { serverError, created, badRequest } from '../helpers/httpHelpers';
import { Car } from '../interfaces/CarInterface';
import { Response } from '../interfaces/ResponseInterface';
import { Model } from '../interfaces/ModelInterface';
import { Service } from '../interfaces/ServiceInterface';
import { Controller } from '../interfaces/ControllerInterface';

export interface Request {
  body: Car;
}

export default class RegisterCar implements Controller<Request> {
  private readonly _carRepository;

  private readonly _carValidator;

  constructor(model: Model<Car>, validator: Service<Car>) {
    this._carRepository = model;
    this._carValidator = validator;
  }

  async handle(req: Request): Promise<Response> {
    try {
      const error = await this._carValidator.validate(req.body);
      if (error) return badRequest(error);
      const response = await this._carRepository.create(req.body);
      return created(response);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
