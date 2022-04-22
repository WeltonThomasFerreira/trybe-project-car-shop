/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import { Model } from '../interfaces/ModelInterface';

export class CarModel implements Model<Car> {
  private readonly _carModel = mongoose.model('Car', new mongoose.Schema({
    model: String, // min(3)
    year: Number, // >= 1900 && <= 2022
    color: String, // min(3)
    status: Boolean,
    buyValue: Number, // only INT
    doorsQty: Number, // >= 2 && <= 4
    seatsQty: Number, // >= 2 && <= 7
  }));

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

export default { CarModel };
