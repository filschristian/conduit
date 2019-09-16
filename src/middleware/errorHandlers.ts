import { Request, Response, NextFunction, Router } from "express";
import * as ErrorHandler from "../utils/errorHandler";

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    ErrorHandler.notFoundError();
  });
};

const handleClientError = (router: Router) => {
  handleError(router, 'client');
};

const handleServerError = (router: Router) => {
  handleError(router, 'server');
};

const handleError = (router: Router, type: string) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    type === 'client'
    ? ErrorHandler.clientError(err, res, next)
    : ErrorHandler.serverError(err, res, next)
  });
};

export default [handle404Error, handleClientError, handleServerError];