import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './services';
import errorHandlers from './middleware/errorHandlers';
import { port, environment } from './config';

process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});

process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});

const router = express();

//Apply all middlewares
applyMiddleware(middleware, router);

//Apply all routes
applyRoutes(routes, router);

//Apply error handlers
applyMiddleware(errorHandlers, router);

const server = http.createServer(router);

if (environment !== 'test') {
    server.listen(port, () => console.log(`Server is running on PORT:${port}...`));
}

export default server;
