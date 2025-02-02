import { PrismaClient } from '@prisma/client';
import { injectable, inject } from 'tsyringe';
import { IHealthRepository } from '../interfaces';
import { METHOD, PROCESS, REPOSITORY } from '../../../../common/enums/common';
import logger from '../../../../common/logger';
import TYPES from '../../../../common/constants/types';
import { IHealthCreateRequest } from '../interfaces/create';
import { HealthGeneralRepository } from '../interfaces/model';
import { HealthShowRepository } from '../interfaces/show';

@injectable()
export default class HealthRepository implements IHealthRepository {
    constructor(@inject(TYPES.PrismaClient) private prismaClient: PrismaClient) {}

    async create(request: IHealthCreateRequest): Promise<HealthGeneralRepository> {
        logger.info(`${REPOSITORY.HEALTH}${METHOD.CREATE}${PROCESS.REQUEST}\n`, request);
        const result = await this.prismaClient.health.create({
            select: { id: true },
            data: {
                description: `Health | ${Math.random()}`,
                create_date_manual: new Date(request.create_date_manual).toISOString(),
                create_date_js: new Date(),
            },
        });
        logger.debug(`${REPOSITORY.HEALTH}${METHOD.CREATE} - result:\n`, result);
        return result;
    }

    async show(id: number): Promise<HealthShowRepository | null> {
        logger.info(`${REPOSITORY.HEALTH}${METHOD.SHOW}`);
        return this.prismaClient.health.findUnique({
            select: {
                id: true,
                description: true,
                create_date_manual: true,
                create_date_js: true,
                created_at: true,
            },
            where: { id },
        });
    }
}
