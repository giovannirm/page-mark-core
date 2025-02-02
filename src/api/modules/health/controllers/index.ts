import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import HealthService from '../services';
import { CONTROLLER, HTTP, METHOD, PROCESS } from '../../../../common/enums/common';
import logger from '../../../../common/logger';
import responseHandler from '../../../../common/middlewares/responseHandler';
import errorHandler from '../../../../common/middlewares/errorHandler';
import TYPES from '../../../../common/constants/types';

@injectable()
export default class HealthController {
    constructor(@inject(TYPES.HealthService) private healthService: HealthService) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        logger.info(`${CONTROLLER.HEALTH}${METHOD.CREATE}`);
        try {
            logger.debug(`${CONTROLLER.HEALTH}${METHOD.CREATE}${PROCESS.REQUEST}\n`, req.body);
            const response = await this.healthService.create(req.body);
            logger.debug(`${CONTROLLER.HEALTH}${METHOD.CREATE}${PROCESS.RESPONSE}\n`, response);
            responseHandler(response, HTTP.STATUS_201, res, next);
        } catch (err: unknown) {
            errorHandler(err, req, res, next);
        }
    }

    async show(req: Request, res: Response, next: NextFunction): Promise<void> {
        logger.info(`${CONTROLLER.HEALTH}${METHOD.SHOW}`);
        try {
            logger.debug(`${CONTROLLER.HEALTH}${METHOD.SHOW}${PROCESS.REQUEST}\n`, req.params);
            const id: number = +req.params.id;
            const response = await this.healthService.show(id);
            logger.debug(`${CONTROLLER.HEALTH}${METHOD.SHOW}${PROCESS.RESPONSE}\n`, response);
            responseHandler(response, HTTP.STATUS_200, res, next);
        } catch (err: unknown) {
            errorHandler(err, req, res, next);
        }
    }
}
