import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { Controller } from '../interfaces/ControllerInterface';
import { Response } from '../interfaces/ResponseInterface';
import { Service } from '../interfaces/ServiceInterface';
import { serverError, ok, badRequest, notFound } from '../helpers/httpHelpers';
import { invalidId } from '../errors/requestErrors';

interface Request {
  params: { id?: string };
  body: Car;
}

export default class UpdateCarsController implements Controller<Request> {
  constructor(
    private readonly _model: Model<Car>,
    private readonly _service: Service<Car>,
  ) {}

  public async handle(req: Request): Promise<Response> {
    try {
      const { id } = req.params;
      const idError = await this._service.validateId(id as string);
      if (idError) return badRequest(idError);
      const bodyError = await this._service.validateBody(req.body);
      if (bodyError) return badRequest(bodyError);
      const responseBody = await this._model.update(id as string, req.body);
      if (responseBody === null) return notFound(invalidId);
      return ok(responseBody);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
