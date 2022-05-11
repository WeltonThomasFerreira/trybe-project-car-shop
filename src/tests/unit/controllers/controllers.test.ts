import CreateCarsController from '../../../controllers/CreateCarsController';
import ReadCarsController from '../../../controllers/ReadCarsController';
import ReadOneCarsController from '../../../controllers/ReadOneCarsController';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { createCar, readCar, readOneCar } from './mocks';

import * as sinnon from 'sinon';
import chai from 'chai';
import { beforeEach } from 'mocha';
const { expect } = chai;

const carModel = new CarModel();
const carService = new CarService();

describe('Create car', () => {
  const { request, created } = createCar;
  const sut = new CreateCarsController(carModel, carService);
  const createStub = sinnon.stub(carModel, 'create');
  const validateBodyStub = sinnon.stub(carService, 'validateBody');

  beforeEach(async () => {
    createStub.resolves(created);
    validateBodyStub.resolves(null);
  });

  after(async () => {
    createStub.restore();
    validateBodyStub.restore();
  });

  it('Return car created successfully', async () => {
    const response = await sut.handle(request);
    expect(response.statusCode).equal(201);
    expect(response.body).deep.equal(created);
  });

  it('Return bad request error', async () => {
    validateBodyStub.resolves(new Error('Bad request'));
    const response = await sut.handle(request);
    expect(response.statusCode).equal(400);
  });

  it('Return server error', async () => {
    createStub.throwsException('Server Error');
    const response = await sut.handle(request);
    expect(response.statusCode).equal(500);
  });
});

describe('Read car', () => {
  const sut = new ReadCarsController(carModel);
  const readStub = sinnon.stub(carModel, 'read');

  beforeEach(async () => {
    readStub.resolves(readCar);
  });

  after(async () => {
    readStub.restore();
  });

  it('Return car successfully', async () => {
    const response = await sut.handle();
    expect(response.statusCode).equal(200);
    expect(response.body).deep.equal(readCar);
  });

  it('Return server error', async () => {
    readStub.throwsException('Server Error');
    const response = await sut.handle();
    expect(response.statusCode).equal(500);
  });
});

describe('Read one car', () => {
  const { request, response } = readOneCar;
  const sut = new ReadOneCarsController(carModel, carService);
  const readOneStub = sinnon.stub(carModel, 'readOne');
  const validateIdStub = sinnon.stub(carService, 'validateId');

  beforeEach(async () => {
    readOneStub.resolves(response);
    validateIdStub.resolves(null);
  });

  after(async () => {
    readOneStub.restore();
    validateIdStub.restore();
  });

  it('Return one car successfully', async () => {
    const response = await sut.handle(request);
    expect(response.statusCode).equal(200);
    expect(response.body).deep.equal(readOneCar.response);
  });

  it('Return bad request error', async () => {
    validateIdStub.resolves(new Error('Bad request'));
    const response = await sut.handle(request);
    expect(response.statusCode).equal(400);
  });

  it('Return not found error', async () => {
    readOneStub.resolves(null);
    const response = await sut.handle(request);
    expect(response.statusCode).equal(404);
  });

  it('Return server error', async () => {
    readOneStub.throwsException('Server Error');
    const response = await sut.handle(request);
    expect(response.statusCode).equal(500);
  });
});
