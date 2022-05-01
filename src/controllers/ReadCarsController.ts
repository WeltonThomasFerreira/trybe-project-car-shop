import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { Controller } from '../interfaces/ControllerInterface';
import { Response } from '../interfaces/ResponseInterface';
import { serverError, ok } from '../helpers/httpHelpers';

export default class ReadCarsController implements Controller {
  constructor(private readonly _model: Model<Car>) {}

  public async handle(): Promise<Response> {
    try {
      const responseBody = await this._model.read();
      return ok(responseBody);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
