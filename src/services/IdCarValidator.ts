import Joi from 'joi';
import { MALFORMED_ID } from '../errors/requestErrors';
import { Service } from '../interfaces/ServiceInterface';

export default class IdCarValidator implements Service<string> {
  private readonly _schema = Joi.object({
    id: Joi.string().required().min(24).error(MALFORMED_ID),
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
