import { NextFunction, Response } from 'express';

const responseHandler = <T>(data: T, statusCode: number, res: Response, next: NextFunction, status?: string) => {
    res.locals.responseData = {
        statusCode,
        status,
        data,
    };
    next();
};

export default responseHandler;
