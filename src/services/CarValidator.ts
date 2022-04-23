import Joi from 'joi';
import {
  BUY_VALUE_IS_REQUIRED,
  COLOR_IS_REQUIRED,
  DOORS_QTY_IS_REQUIRED,
  MODEL_IS_REQUIRED,
  SEATS_QTY_IS_REQUIRED,
  STATUS_SHOULD_BE_BOOL,
  YEAR_IS_REQUIRED,
} from '../errors/requestErrors';
import { Car } from '../interfaces/CarInterface';
import { Service } from '../interfaces/ServiceInterface';

export default class CarValidator implements Service<Car> {
  private readonly _schema = Joi.object({
    _id: Joi.string(),
    model: Joi.string().required().min(3).error(MODEL_IS_REQUIRED),
    year: Joi.number().required().min(1900).max(2022)
      .error(YEAR_IS_REQUIRED),
    color: Joi.string().required().min(3).error(COLOR_IS_REQUIRED),
    status: Joi.boolean().error(STATUS_SHOULD_BE_BOOL),
    buyValue: Joi.number().required().integer().error(BUY_VALUE_IS_REQUIRED),
    doorsQty: Joi.number()
      .required()
      .min(2)
      .max(4)
      .error(DOORS_QTY_IS_REQUIRED),
    seatsQty: Joi.number()
      .required()
      .min(2)
      .max(7)
      .error(SEATS_QTY_IS_REQUIRED),
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
