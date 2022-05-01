import { Model } from '../interfaces/ModelInterface';
import { Car } from '../interfaces/CarInterface';
import { Controller } from '../interfaces/ControllerInterface';
import { Response } from '../interfaces/ResponseInterface';
import { Service } from '../interfaces/ServiceInterface';
import {
  serverError,
  badRequest,
  notFound,
  noContent,
} from '../helpers/httpHelpers';
import { invalidId } from '../errors/requestErrors';

interface Request {
  params: { id?: string };
}

export default class DeleteCarsController implements Controller<Request> {
  constructor(
    private readonly _model: Model<Car>,
    private readonly _service: Service<Car>,
  ) {}

  public async handle(req: Request): Promise<Response> {
    try {
      const { id } = req.params;
      const idError = await this._service.validateId(id as string);
      if (idError) return badRequest(idError);
      const responseBody = await this._model.readOne(id as string);
      if (responseBody === null) return notFound(invalidId);
      return noContent();
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
