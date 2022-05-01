import { Router, Request, Response } from 'express';
import CreateCarsController from '../controllers/CreateCarsController';
import ReadCarsController from '../controllers/ReadCarsController';
import ReadOneCarsController from '../controllers/ReadOneCarsController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const router = Router();
const carModel = new CarModel();
const carService = new CarService();

const createCarsController = new CreateCarsController(carModel, carService);
const readCarsController = new ReadCarsController(carModel);
const readOneCarsController = new ReadOneCarsController(carModel, carService);

router.post('/cars', async (req: Request, res: Response) => {
  const { statusCode, body } = await createCarsController.handle(req);
  return res.status(statusCode).json(body);
});

router.get('/cars', async (_req: Request, res: Response) => {
  const { statusCode, body } = await readCarsController.handle();
  return res.status(statusCode).json(body);
});

router.get('/cars/:id', async (req: Request, res: Response) => {
  const { statusCode, body } = await readOneCarsController.handle(req);
  return res.status(statusCode).json(body);
});

export default router;
