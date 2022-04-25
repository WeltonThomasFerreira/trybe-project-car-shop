import { Router, Request, Response } from 'express';
import GetAllCarsController from '../controllers/GetAllCarsController';
import GetCarByIdController from '../controllers/GetCarByIdController';
import RegisterCarController from '../controllers/RegisterCarController';
import CarModel from '../models/CarModel';
import CarValidator from '../services/CarValidator';
import IdCarValidator from '../services/IdCarValidator';

const carsRouter = Router();
const carModel = new CarModel();
const carValidator = new CarValidator();
const idCarValidator = new IdCarValidator();

const registerCarController = new RegisterCarController(carModel, carValidator);
const getAllCarsController = new GetAllCarsController(carModel);
const getCarByIdController = new GetCarByIdController(carModel, idCarValidator);

carsRouter
  .route('/')
  .post(async (req: Request, res: Response) => {
    const response = await registerCarController.handle(req);
    return res.status(response.statusCode).json(response.body);
  })
  .get(async (_req: Request, res: Response) => {
    const response = await getAllCarsController.handle();
    return res.status(response.statusCode).json(response.body);
  });

carsRouter.route('/:id').get(async (req: Request, res: Response) => {
  const response = await getCarByIdController.handle(req);
  return res.status(response.statusCode).json(response.body);
});

export default carsRouter;
