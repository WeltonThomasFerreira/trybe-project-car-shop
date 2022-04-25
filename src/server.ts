import App from './app';
import carsRouter from './routers/carsRouter';

const server = new App();

server.addRouter('/cars', carsRouter);

export default server;
