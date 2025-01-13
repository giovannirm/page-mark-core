import { Request, Response, NextFunction } from "express";
import { STATUS } from "../enums/common";

const successResponseHandler = (_: Request, res: Response, next: NextFunction) => {
	if (res.locals.responseData) {
		const { statusCode, status, data } = res.locals.responseData;
		res.status(statusCode).json({ status: status || STATUS.SUCCESS, data });
	} else {
		next();
	}
};

export default successResponseHandler;
