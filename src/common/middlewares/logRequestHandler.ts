import { Request, Response, NextFunction } from "express";
import { logger } from "../logger/logger";

const logRequestHandler = (req: Request, _: Response, next: NextFunction) => {
	logger.info(`HTTP ${req.method} Request on ${req.path}`);
	next();
};

export default logRequestHandler;
