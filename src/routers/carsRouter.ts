import { Router, Request, Response } from 'express';
import RegisterCarController from '../controllers/RegisterCarController';
import CarModel from '../models/CarModel';
import CarValidator from '../services/CarValidator';

const carsRouter = Router();

const registerCarController = new RegisterCarController(
  new CarModel(),
  new CarValidator(),
);

carsRouter.post('/cars', async (req: Request, res: Response) => {
  const response = await registerCarController.handle(req);
  return res.status(response.statusCode).json(response.body);
});

export default carsRouter;
