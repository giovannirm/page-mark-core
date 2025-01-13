import { health } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { CreateHealthRequest, IHealthService } from "../interfaces";
import HealthRepository from "../repository";
import { METHOD, NUM, SERVICE } from "../../../../common/enums/common";
import { NotFoundException } from "../../../../common/errors/error.handler";
import { logger } from "../../../../common/logger/logger";
import TYPES from "../../../../common/constants/types";

@injectable()
export default class HealthService implements IHealthService {
	constructor(@inject(TYPES.HealthRepository) private healthRepository: HealthRepository) {}

	async create(userId: string, dataRequest: CreateHealthRequest): Promise<health | null> {
		logger.info(`${SERVICE.HEALTH}${METHOD.CREATE}`);
		logger.debug(`${SERVICE.HEALTH}${METHOD.CREATE} - request:\n`, dataRequest, userId);
		const data = await this.healthRepository.create(dataRequest);
		logger.debug(`${SERVICE.HEALTH}${METHOD.CREATE} - response:\n`, data);
		if (data?.id! > NUM.THREE) {
			throw new NotFoundException("Data not found");
		}
		return data;
	}

	async show(id: number): Promise<health | null> {
		logger.info(`${SERVICE.HEALTH}${METHOD.SHOW}`);
		return this.healthRepository.show(id);
	}
}
