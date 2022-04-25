import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { Response } from '../interfaces/ResponseInterface';
import { serverError, ok } from '../helpers/httpHelpers';
import { Controller } from '../interfaces/ControllerInterface';

export default class GetCars implements Controller {
  private readonly _carRepository;

  constructor(model: Model<Car>) {
    this._carRepository = model;
  }

  async handle(): Promise<Response> {
    try {
      const response = await this._carRepository.read();
      return ok(response);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
