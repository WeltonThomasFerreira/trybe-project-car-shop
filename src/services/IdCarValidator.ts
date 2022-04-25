import Joi from 'joi';
import { malformedId } from '../errors/requestErrors';
import { Service } from '../interfaces/ServiceInterface';

export default class IdCarValidator implements Service<string> {
  private readonly _schema = Joi.object({
    id: Joi.string().required().min(24).error(malformedId),
  });

  public async validate(params: unknown): Promise<Error | null> {
    try {
      await this._schema.validateAsync(params);
      return null;
    } catch (error) {
      return error as Error;
    }
  }
}
