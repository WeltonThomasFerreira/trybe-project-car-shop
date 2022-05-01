import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { Controller } from '../interfaces/ControllerInterface';
import { Response } from '../interfaces/ResponseInterface';
import { Service } from '../interfaces/ServiceInterface';
import { serverError, created, badRequest } from '../helpers/httpHelpers';

interface Request {
  body: Car;
}

export default class CreateCarsController implements Controller<Request> {
  constructor(
    private readonly _model: Model<Car>,
    private readonly _service: Service<Car>,
  ) {}

  public async handle(req: Request): Promise<Response> {
    try {
      const error = await this._service.validateBody(req.body);
      if (error) return badRequest(error);
      const responseBody = await this._model.create(req.body);
      return created(responseBody);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
