import { BOOLEAN_STRING, DATA_TYPE, NUM } from "../enums/common";

export const cleanDoubleQuotes = (char: string): string => char.replace(/"/g, "'");

export const verifyExistance = (param: any): any => {
	if (param === false) return param;

	if (!param) return undefined;

	return param;
};

export const parseToBoolean = (value: string | boolean) => value === BOOLEAN_STRING.TRUE || value === true;

export const validStringBoolean = (value: string | string[] | boolean | undefined | null): boolean => {
	if (typeof value === "string" || typeof value === "boolean") return parseToBoolean(value);
	if (value === undefined || value === null) return false;
	if (Array.isArray(value) && value.length > NUM.ZERO) return parseToBoolean(value[NUM.ZERO]);
	return false;
};

export const isArray = (str: string): boolean => {
	try {
		const parsed = JSON.parse(str);

		return (
			Array.isArray(parsed) &&
			parsed.every((item) => typeof item === DATA_TYPE.STRING || typeof item === DATA_TYPE.NUMBER)
		);
	} catch (e) {
		return false;
	}
};
