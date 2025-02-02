import { NUM } from '../enums/common';

export const MESSAGE_ERROR = 'An unknown error occurred';

export const CHARACTER_T = 'T';

export const ALLOWED_URLS = [process.env.APP_FRONT_INTERFACE as string];

export const CORS_OPTIONS = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    credentials: true,
};

export const MESSAGE_API = 'PAGE MARK SERVICE';
export const API_PATH = '/v1/api';
export const PORT_DEFAULT = NUM.THREE_THOUSAND;
export const PORT = 'port';

export const NUM_FMT = {
    GENERAL: 'general',
    DATE: 'dd/mm/yyyy hh:mm',
    NUMBER: (decimals: number) => {
        if (decimals < 0) throw new Error('Decimals must be greater than or equal to 0');
        const decimalPart = '0'.repeat(decimals);
        return `#,##0.${decimalPart}`;
    },
};

export const HEADER_NAME = {
    CONTENT_TYPE: 'Content-Type',
    CONTENT_DISPOSITION: 'Content-Disposition',
};

export const HEADER_VALUE = {
    APPLICATION_PDF: 'application/pdf',
};

export const ATTACHMENT = (fileName: string): string => `attachment; filename=${fileName}`;
