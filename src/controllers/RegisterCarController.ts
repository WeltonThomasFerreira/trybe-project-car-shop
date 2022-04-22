import { Car } from '../interfaces/CarInterface';
import { Model } from '../interfaces/ModelInterface';

export interface IRequest {
  body: Car;
}

export interface IResponse {
  statusCode: number;
  body: unknown;
}

export class RegisterCarController {
  private readonly _carModel;

  private readonly _service: unknown;

  constructor(model: Model<Car>, service: unknown) {
    this._carModel = model;
    this._service = service;
  }

  async handle(req: IRequest): Promise<IResponse> {
    const response = await this._carModel.create(req.body);
    return { statusCode: 201, body: response };
  }
}

export default { RegisterCarController };
