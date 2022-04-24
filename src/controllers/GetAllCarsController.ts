import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { IResponse } from '../interfaces/ResponseInterface';
import { serverError, ok } from '../helpers/httpHelpers';
import { IController } from '../interfaces/ControllerInterface';

export default class GetAllCarsController implements IController {
  private readonly _carModel;

  constructor(model: Model<Car>) {
    this._carModel = model;
  }

  async handle(): Promise<IResponse> {
    try {
      const response = await this._carModel.read();
      return ok(response);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
