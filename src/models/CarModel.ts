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
      // __v: { type: Number, select: false },
    }),
  );

  async create(car: Car): Promise<Car> {
    return this._carModel.create(car);
  }

  async read(): Promise<Car[]> {
    return this._carModel.find({}).exec();
  }

  async readOne(id: string): Promise<Car | null> {
    return this._carModel.findById(id).exec();
  }

  async update(id: string, car: object): Promise<Car | null> {
    return this._carModel
      .findOneAndUpdate({ id }, car, {
        new: true,
        fields: '-__v',
      })
      .exec();
  }

  async delete(id: string): Promise<Car | null> {
    await this._carModel.deleteOne({ id }).exec();
    return null;
  }
}
