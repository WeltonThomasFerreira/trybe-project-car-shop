import { Router, Request, Response } from 'express';
import GetCars from '../controllers/GetCarsController';
import GetCarById from '../controllers/GetCarByIdController';
import RegisterCar from '../controllers/RegisterCarController';
import CarModel from '../models/CarModel';
import CarValidator from '../services/CarValidator';
import IdCarValidator from '../services/IdCarValidator';

const carsRouter = Router();
const carModel = new CarModel();
const carValidator = new CarValidator();
const idCarValidator = new IdCarValidator();

const registerCarController = new RegisterCar(carModel, carValidator);
const getAllCarsController = new GetCars(carModel);
const getCarByIdController = new GetCarById(carModel, idCarValidator);

carsRouter
  .get('/', async (_req: Request, res: Response) => {
    const response = await getAllCarsController.handle();
    return res.status(response.statusCode).json(response.body);
  })
  .get('/:id', async (req: Request, res: Response) => {
    const response = await getCarByIdController.handle(req);
    return res.status(response.statusCode).json(response.body);
  })
  .post('/', async (req: Request, res: Response) => {
    const response = await registerCarController.handle(req);
    return res.status(response.statusCode).json(response.body);
  });

export default carsRouter;
