import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { CONTROLLER, HTTP, METHOD } from "../../../../common/enums/common";
import { logger } from "../../../../common/logger/logger";
import responseHandler from "../../../../common/middlewares/responseHandler";
import errorHandler from "../../../../common/middlewares/errorHandler";
import { NotFoundException } from "../../../../common/errors/error.handler";
import WordsUtil from "../../../../common/utils/wordsUtil";

@injectable()
export default class PageMarkController {
	// constructor(@inject(TYPES.PageMarkService) private pageMarkService: PageMarkService) {}

	async paginate(req: Request, res: Response, next: NextFunction): Promise<void> {
		logger.info(`${CONTROLLER.PAGE_MARK}${METHOD.PAGINATE}`);
		try {
			const { file } = req;
			if (!file) throw new NotFoundException("File not found");

			const response = WordsUtil.numberToWords(23);
			responseHandler(response, HTTP.STATUS_200, res, next);
		} catch (err: unknown) {
			errorHandler(err, req, res, next);
		}
	}
}
