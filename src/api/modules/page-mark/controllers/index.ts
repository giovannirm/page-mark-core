import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CONTROLLER, METHOD } from '../../../../common/enums/common';
import logger from '../../../../common/logger';
import errorHandler from '../../../../common/middlewares/errorHandler';
import { NotFoundException } from '../../../../common/errors/error.handler';
import { PDFDocument } from 'pdf-lib';
import { ATTACHMENT, HEADER_VALUE, HEADER_NAME } from '../../../../common/constants/common';
import TYPES from '../../../../common/constants/types';
import PageMarkService from '../services';

@injectable()
export default class PageMarkController {
    constructor(@inject(TYPES.PageMarkService) private pageMarkService: PageMarkService) {}

    async paginate(req: Request, res: Response, next: NextFunction): Promise<void> {
        logger.info(`${CONTROLLER.PAGE_MARK}${METHOD.PAGINATE}`);
        try {
            const { file } = req;
            if (!file) throw new NotFoundException('File not found');

            if (file.mimetype !== 'application/pdf') throw new Error('Solo se permiten archivos PDF');

            logger.debug('Archivo recibido: %o', file);

            const pdf = await PDFDocument.load(file.buffer);
            if (!pdf) throw new Error('No se pudo procesar el PDF.');

            const document = await this.pageMarkService.paginate(pdf, req.body);

            res.setHeader(HEADER_NAME.CONTENT_TYPE, HEADER_VALUE.APPLICATION_PDF);
            res.setHeader(HEADER_NAME.CONTENT_DISPOSITION, ATTACHMENT(`${file.originalname}.pdf`));

            res.send(Buffer.from(document));
        } catch (err: unknown) {
            errorHandler(err, req, res, next);
        }
    }
}
