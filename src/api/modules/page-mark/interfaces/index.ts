import { PDFDocument } from 'pdf-lib';
import { IPageMarkPaginateRequest } from './paginate';

export interface IPageMarkService {
    paginate(document: PDFDocument, request: IPageMarkPaginateRequest): Promise<Uint8Array<ArrayBufferLike>>;
}
