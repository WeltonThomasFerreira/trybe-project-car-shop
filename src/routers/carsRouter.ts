import { Router, Request, Response } from 'express';
import GetAllCarsController from '../controllers/GetAllCarsController';
import RegisterCarController from '../controllers/RegisterCarController';
import CarModel from '../models/CarModel';
import CarValidator from '../services/CarValidator';

const carsRouter = Router();
const carModel = new CarModel();
const carValidator = new CarValidator();

const registerCarController = new RegisterCarController(carModel, carValidator);
const getAllCarsController = new GetAllCarsController(carModel);

carsRouter
  .route('/cars')
  .post(async (req: Request, res: Response) => {
    const response = await registerCarController.handle(req);
    return res.status(response.statusCode).json(response.body);
  })
  .get(async (req: Request, res: Response) => {
    const response = await getAllCarsController.handle();
    return res.status(response.statusCode).json(response.body);
  });

export default carsRouter;
