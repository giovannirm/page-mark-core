import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { CONTROLLER, METHOD, NUM } from "../../../../common/enums/common";
import { logger } from "../../../../common/logger/logger";
import errorHandler from "../../../../common/middlewares/errorHandler";
import { NotFoundException } from "../../../../common/errors/error.handler";
import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import responseHandler from "../../../../common/middlewares/responseHandler";
import util from "util";
import WordsUtil from "../../../../common/utils/wordsUtil-";

@injectable()
export default class PageMarkController {
	// constructor(@inject(TYPES.PageMarkService) private pageMarkService: PageMarkService) {}

	async paginate(req: Request, res: Response, next: NextFunction): Promise<void> {
		logger.info(`${CONTROLLER.PAGE_MARK}${METHOD.PAGINATE}`);
		try {
			const { file } = req;
			if (!file) throw new NotFoundException("File not found");
			
			logger.debug("file: %o", file);

			// Cargar el PDF en pdf-lib
			const pdfDoc = await PDFDocument.load(file.buffer);
			const pages = pdfDoc.getPages();

			// Agregar numeración en cada página
			pages.forEach((page, index) => {
				logger.debug(`Page ${index + 1}`);
				const { width, height } = page.getSize();
				const numberPage = index + 1;
				const text = `${numberPage} / ${WordsUtil.numberToWords(numberPage)}`;
				
				// Posicionar en la parte superior derecha
				page.drawText(text, {
					x: width - 100, // Parte derecha
					y: height - 20, // Parte superior
					size: 10,
					color: rgb(0, 0, 0),
				});

				// page.drawText(text, {
				// 	x: width / 2 - 30, // Centrado
				// 	y: 20, // Parte inferior
				// 	size: 12,
				// 	color: rgb(0, 0, 0), // Color negro
				// });
			});
			logger.debug(`pdf finalizado`)

			// Guardar el PDF modificado
			const modifiedPdfBytes = await pdfDoc.save();
		
			logger.debug("modifiedPdfBytes: %o", modifiedPdfBytes);
			// Enviar el PDF modificado como respuesta
			res.setHeader("Content-Type", "application/pdf");
			res.setHeader("Content-Disposition", `attachment; filename=foliado_${file.originalname}.pdf`);
			res.send(Buffer.from(modifiedPdfBytes));
			logger.debug("finalizado")
		} catch (err: unknown) {
			errorHandler(err, req, res, next);
		}
	}
}
