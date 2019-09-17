import { Request, Response, NextFunction, Router } from 'express';
import * as ErrorHandler from '../utils/errorHandler';

const handle404Error = (router: Router): void => {
    router.use(() => {
        ErrorHandler.notFoundError();
    });
};

const handleError = (router: Router, type: string): void => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        type === 'client' ? ErrorHandler.clientError(err, res, next) : ErrorHandler.serverError(err, res);
    });
};

const handleClientError = (router: Router): void => {
    handleError(router, 'client');
};

const handleServerError = (router: Router): void => {
    handleError(router, 'server');
};

export default [handle404Error, handleClientError, handleServerError];
