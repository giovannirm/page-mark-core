import { injectable } from "tsyringe";
import { METHOD, SERVICE } from "../../../../common/enums/common";
import { logger } from "../../../../common/logger/logger";
import { IPageMarkService } from "../interfaces";

@injectable()
export default class PageMarkService implements IPageMarkService {
	constructor() {}

	async paginate(userId: string, dataRequest: any): Promise<any | null> {
		logger.info(`${SERVICE.PAGE_MARK}${METHOD.PAGINATE}`);
		logger.debug(`${SERVICE.PAGE_MARK}${METHOD.PAGINATE} - request:\n`, dataRequest, userId);

		return null;
	}
}
