import "reflect-metadata";
import { container } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import http from "http";
import TYPES from "./common/constants/types";
import { API_PATH, CORS_OPTIONS, PORT_DEFAULT } from "./common/constants/common";
import { CONTAINER_ERROR, NUM } from "./common/enums/common";
import HealthController from "./api/modules/health/controllers";
import HealthService from "./api/modules/health/services";
import HealthRepository from "./api/modules/health/repository";
import { logger } from "./common/logger/logger";
import { checkDatabaseConnection, prismaClient } from "./common/utils/prismaClient";
import PageMarkController from "./api/modules/page-mark/controllers";
import PageMarkService from "./api/modules/page-mark/services";
import PageMarkRepository from "./api/modules/page-mark/repository";

export async function initializeContainer() {
	container.register<PrismaClient>(TYPES.PrismaClient, {
		useValue: prismaClient,
	});

	checkDatabaseConnection(prismaClient);

	container.register<HealthController>(TYPES.HealthController, {
		useClass: HealthController,
	});
	container.register<HealthService>(TYPES.HealthService, {
		useClass: HealthService,
	});
	container.register<HealthRepository>(TYPES.HealthRepository, {
		useClass: HealthRepository,
	});

	container.register<PageMarkController>(TYPES.PageMarkController, {
		useClass: PageMarkController,
	});
	container.register<PageMarkService>(TYPES.PageMarkService, {
		useClass: PageMarkService,
	});
	container.register<PageMarkRepository>(TYPES.PageMarkRepository, {
		useClass: PageMarkRepository,
	});
}

export async function initializeServer() {
	const app = await import("./server");
	container.register<http.Server>(TYPES.Server, {
		useValue: http.createServer(app.default),
	});

	const server = container.resolve<http.Server>(TYPES.Server);
	const port = process.env.PORT || PORT_DEFAULT;

	server.listen(port, () => {
		logger.info(`When it's ${new Date().toLocaleString()} we are getting ready`);
		logger.info(`Starting in [${process.env.APP_ENV}] mode`);
		logger.info(`Listening on https://localhost:${port}${API_PATH}`);
		logger.info(`=============================================`);
		logger.debug(`Server is running on port [${port}]`);
		logger.debug(`CORS: %o`, CORS_OPTIONS);
		logger.info(`=============================================`);
	});
}

export async function initialize() {
	try {
		await initializeContainer();
		logger.info("Container initialized successfully");
		await initializeServer();
		logger.info("Server initialized successfully");
	} catch (error) {
		logger.error("An error occurred while initializing the server", error);
		throw new Error(CONTAINER_ERROR.ERROR_DEPENDENCY);
	}
}

export default container;
