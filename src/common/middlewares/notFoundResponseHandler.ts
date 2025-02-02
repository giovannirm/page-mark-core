import { Request, Response, NextFunction } from 'express';
import logger from '../logger';
import { HTTP } from '../enums/common';
import ApiError from '../../errors/apiErrors';

const notFoundResponseHandler = (_req: Request, _res: Response, next: NextFunction) => {
    logger.info(`notFoundResponseHandler`);
    const error = new ApiError(HTTP.STATUS_404, 'Route Not Found');
    next(error);
};

export default notFoundResponseHandler;
