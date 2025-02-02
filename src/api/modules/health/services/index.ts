import { inject, injectable } from 'tsyringe';
import { IHealthService } from '../interfaces';
import HealthRepository from '../repository';
import { METHOD, PROCESS, SERVICE } from '../../../../common/enums/common';
import { NotFoundException } from '../../../../common/errors/error.handler';
import logger from '../../../../common/logger';
import TYPES from '../../../../common/constants/types';
import { IHealthCreateRequest } from '../interfaces/create';
import HealthMapper from '../mappers';
import { HealthShowMapper } from '../interfaces/show';
import { HealthGeneralService } from '../interfaces/model';

@injectable()
export default class HealthService implements IHealthService {
    constructor(
        @inject(TYPES.HealthRepository)
        private healthRepository: HealthRepository
    ) {}

    async create(request: IHealthCreateRequest): Promise<HealthGeneralService> {
        logger.info(`${SERVICE.HEALTH}${METHOD.CREATE}`);
        const response = await this.healthRepository.create(request);
        logger.debug(`${SERVICE.HEALTH}${METHOD.CREATE}${PROCESS.RESPONSE} %o`, response);
        return {
            id: response.id,
        };
    }

    async show(id: number): Promise<HealthShowMapper> {
        logger.info(`${SERVICE.HEALTH}${METHOD.SHOW}`);
        const response = await this.healthRepository.show(id);
        if (!response) throw new NotFoundException('Health not found');
        logger.debug(`${SERVICE.HEALTH}${METHOD.SHOW}${PROCESS.RESPONSE} %o`, response);
        return HealthMapper.showResponse(response);
    }
}
