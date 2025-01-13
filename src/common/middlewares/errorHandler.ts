import { NextFunction, Request, Response } from "express";
import { logger } from "../logger/logger";
import { HttpException } from "../errors/error.handler";
import { HTTP } from "../enums/common";
import ApiError from "../../errors/apiErrors";
import { CelebrateError, isCelebrateError } from "celebrate";
import { AxiosError } from "axios";
import { cleanDoubleQuotes } from "../utils/string-operations";

interface ErrorResponse<T = any> {
	status: string;
	message: string;
	data?: T;
}

function formatCelebrateErrors(err: CelebrateError): Record<string, string> {
	return [...err.details.values()].reduce<Record<string, string>>((acc, segment) => {
		const newAcc = { ...acc };
		segment.details.forEach((detail) => {
			const key = detail.path.join(".");
			newAcc[key] = cleanDoubleQuotes(detail.message);
		});
		return newAcc;
	}, {});
}

function handleCelebrateError(err: CelebrateError, res: Response) {
	const errors = formatCelebrateErrors(err);
	logger.error("CelebrateError failed: handleCelebrateError: ");
	logger.error(errors);
	res.status(HTTP.STATUS_400).json({
		status: "error",
		message: "Validation failed",
		errors,
	});
}

function handleApiError(err: ApiError, res: Response) {
	logger.error("ApiError failed: handleApiError: ");
	logger.error(err);
	res.status(err.statusCode).json({
		status: "error",
		statusCode: err.statusCode,
		message: err.message || "An unexpected error has occurred!!!",
	});
}

function handleHttpError(err: HttpException, res: Response) {
	logger.error("HttpException failed: handleHttpError: ");
	logger.error(err);
	const errorResponse: ErrorResponse = {
		status: err.status || "error",
		message: err.message,
	};
	if (err.data) {
		errorResponse.data = err.data;
	}
	res.status(err.statusCode).json(errorResponse);
}

function handleAxiosError(err: AxiosError, res: Response) {
	logger.error("AxiosError failed: handleAxiosError: ");
	logger.error(err.response?.data);
	res.status(err.status!).json({ status: "error", message: err.message });
}

function handleGenericError(err: Error | unknown, res: Response) {
	logger.error("An unhandled error occurred: ");
	logger.error(err);
	res.status(HTTP.STATUS_500).json({
		status: "error",
		statusCode: HTTP.STATUS_500,
		message: "An unexpected error has occurred",
		error: err,
	});
}

const errorHandler = (
	err: ApiError | CelebrateError | Error | HttpException | unknown,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (isCelebrateError(err)) {
		handleCelebrateError(err, res);
	} else if (err instanceof ApiError) {
		handleApiError(err, res);
	} else if (err instanceof HttpException) {
		handleHttpError(err, res);
	} else if (err instanceof AxiosError) {
		handleAxiosError(err, res);
	} else {
		handleGenericError(err, res);
	}
};

export default errorHandler;
