/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Joi, { Err } from 'joi';
import {
  modelIsRequired,
  yearIsRequired,
  colorIsRequired,
  statusShouldBeBool,
  buyValueIsRequired,
  doorsQtyIsRequired,
  seatsQtyIsRequired,
  malformedId,
} from '../errors/requestErrors';
import { Car } from '../interfaces/CarInterface';
import { Service } from '../interfaces/ServiceInterface';

export default class CarService implements Service<Car> {
  private readonly _id = Joi.string().required().min(24).error(malformedId);

  private readonly _body = Joi.object({
    _id: Joi.string(),
    model: Joi.string().required().min(3).error(modelIsRequired),
    year: Joi.number().required().min(1900).max(2022)
      .error(yearIsRequired),
    color: Joi.string().required().min(3).error(colorIsRequired),
    status: Joi.boolean().error(statusShouldBeBool),
    buyValue: Joi.number().required().integer().error(buyValueIsRequired),
    doorsQty: Joi.number().required().min(2).max(4)
      .error(doorsQtyIsRequired),
    seatsQty: Joi.number().required().min(2).max(7)
      .error(seatsQtyIsRequired),
  });

  public async validateId(id: string): Promise<Error | null> {
    try {
      await this._id.validateAsync(id);
      return null;
    } catch (error) {
      return error as Error;
    }
  }

  public async validateBody(body: Car): Promise<null | Error> {
    try {
      await this._body.validateAsync(body);
      return null;
    } catch (error) {
      return error as Error;
    }
  }
}
