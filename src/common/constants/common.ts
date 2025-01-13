import { NUM } from "../enums/common";

export const ALLOWED_URLS = [process.env.APP_FRONT_INTERFACE as string];

export const CORS_OPTIONS = {
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
	credentials: true,
};

export const MESSAGE_API = "PAGE MARK SERVICE";
export const API_PATH = "/v1/api";
export const PORT_DEFAULT = NUM.THREE_THOUSAND;
export const PORT = "port";

export const NUM_FMT = {
	GENERAL: "general",
	DATE: "dd/mm/yyyy hh:mm",
	NUMBER: (decimals: number) => {
		if (decimals < 0) throw new Error("Decimals must be greater than or equal to 0");
		const decimalPart = "0".repeat(decimals);
		return `#,##0.${decimalPart}`;
	},
};

export const HEADERS_KEY = {
	AUTHORIZATION: "Authorization",
	CONTENT_TYPE: "Content-Type",
};

export const HEADERS_VALUE = {
	BEARER: "Bearer",
	APPLICATION_EXCEL: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	CONTENT_DISPOSITION: "Content-Disposition",
	ATTACHMENT: (fileName: string): string => `attachment; filename=${fileName}`,
	APPLICATION_JSON: "application/json",
	APPLICATION_X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",
};

export const MESSAGE_ERROR = "An unknown error occurred";

export const CHARACTER_T = "T";

export const RES_HEADERS = {
	AUTHORIZATION: "Authorization",
	BEARER: "Bearer",
	CONTENT_TYPE: "Content-Type",
	APPLICATION_EXCEL: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	CONTENT_DISPOSITION: "Content-Disposition",
	ATTACHMENT: (fileName: string): string => `attachment; filename=${fileName}`,
	APPLICATION_JSON: "application/json",
	APPLICATION_X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",
	X_API_KEY: "x-api-key",
};
