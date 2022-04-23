/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import { Model } from '../interfaces/ModelInterface';

export default class CarModel implements Model<Car> {
  private readonly _carModel = mongoose.model(
    'Car',
    new mongoose.Schema({
      model: String,
      year: Number,
      color: String,
      status: Boolean,
      buyValue: Number,
      doorsQty: Number,
      seatsQty: Number,
    }),
  );

  async create(car: Car): Promise<Car> {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    const newCar = new this._carModel({
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    });
    newCar.save();
    return newCar;
  }

  async read(): Promise<Car[]> {
    throw new Error('Method not implemented.');
  }

  async readOne(args: string): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }

  async update(arg1: string, arg2: object): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }

  async delete(args: string): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }
}
