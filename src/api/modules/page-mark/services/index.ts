import { injectable } from 'tsyringe';
import { METHOD, SERVICE } from '../../../../common/enums/common';
import logger from '../../../../common/logger';
import { IPageMarkService } from '../interfaces';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import WordsUtil from '../../../../common/utils/words';
import { IPageMarkPaginateRequest, IPosition } from '../interfaces/paginate';

@injectable()
export default class PageMarkService implements IPageMarkService {
    async paginate(document: PDFDocument, request: IPageMarkPaginateRequest): Promise<Uint8Array<ArrayBufferLike>> {
        logger.info(`${SERVICE.PAGE_MARK}${METHOD.PAGINATE}`);

        const pages = document.getPages();
        const { defaultPosition, specificPositions, format, fontBytes, fontSize } = request;

        const customFont = fontBytes
            ? await document.embedFont(fontBytes)
            : await document.embedFont(StandardFonts.TimesRoman);

        const specificPositionsMap = new Map<number, IPosition>();
        if (specificPositions) {
            for (const pos of specificPositions) {
                specificPositionsMap.set(pos.page, { x: pos.x, y: pos.y });
            }
        }

        pages.forEach((page, index) => {
            const numberPage = index + 1;
            const baseFormat = format ?? '%n / %w';
            const numberFormat = WordsUtil.format(baseFormat, numberPage);

            logger.debug(`Format: ${numberFormat}`);

            const position = specificPositionsMap.get(numberPage) || defaultPosition;

            page.drawText(numberFormat, {
                x: position.x,
                y: position.y,
                size: fontSize,
                font: customFont,
                color: rgb(0, 0, 0),
            });
        });

        const modifiedPdfBytes = await document.save();
        return modifiedPdfBytes;
    }
}
