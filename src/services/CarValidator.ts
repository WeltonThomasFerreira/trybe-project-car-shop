import Joi from 'joi';
import {
  buyValueIsRequired,
  colorIsRequired,
  doorsQtyIsRequired,
  modelIsRequired,
  seatsQtyIsRequired,
  statusShouldBeBool,
  yearIsRequired,
} from '../errors/requestErrors';
import { Car } from '../interfaces/CarInterface';
import { Service } from '../interfaces/ServiceInterface';

export default class CarValidator implements Service<Car> {
  private readonly _schema = Joi.object({
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

  public async validate(car: Car): Promise<null | Error> {
    try {
      await this._schema.validateAsync(car);
      return null;
    } catch (error) {
      return error as Error;
    }
  }
}
