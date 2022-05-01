import App from './app';
import carsRouter from './routers/carsRouter';

const server = new App();

server.addRouter(carsRouter);

export default server;
