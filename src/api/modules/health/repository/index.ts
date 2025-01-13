import { PrismaClient, health } from "@prisma/client";
import { injectable, inject } from "tsyringe";
import { CreateHealthRequest, IHealthRepository } from "../interfaces";
import { METHOD, REPOSITORY } from "../../../../common/enums/common";
import { logger } from "../../../../common/logger/logger";
import TYPES from "../../../../common/constants/types";

@injectable()
export default class HealthRepository implements IHealthRepository {
	constructor(@inject(TYPES.PrismaClient) private prismaClient: PrismaClient) {}

	async create(dataRequest: CreateHealthRequest): Promise<health | null> {
		logger.info(`${REPOSITORY.HEALTH}${METHOD.CREATE} - dataRequest:\n`, dataRequest.create_date_manual);
		const data = {
			description: `Health | ${Math.random()}`,
			create_date_manual: new Date(dataRequest.create_date_manual).toISOString(),
			create_date_js: new Date(),
		};
		logger.debug(`${REPOSITORY.HEALTH}${METHOD.CREATE} - data:\n`, data);
		const result = await this.prismaClient.health.create({
			data,
		});
		logger.debug(`${REPOSITORY.HEALTH}${METHOD.CREATE} - result:\n`, result);
		return result;
	}

	async show(id: number): Promise<health | null> {
		logger.info(`${REPOSITORY.HEALTH}${METHOD.SHOW}`);
		return this.prismaClient.health.findUnique({
			where: { id },
		});
	}
}
