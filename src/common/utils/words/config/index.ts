import { LANGUAGE } from "../../../enums/number/language";
import { IEnglishConfig, ISpanishConfig, TLanguageConfig } from "../types";

const spanishConfig: ISpanishConfig = {
	zero: "cero",
	units: ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"],
	tens: ["diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"],
	special: [
		"diez",
		"once",
		"doce",
		"trece",
		"catorce",
		"quince",
		"dieciséis",
		"diecisiete",
		"dieciocho",
		"diecinueve",
		"veintiuno",
		"veintidós",
		"veintitrés",
		"veinticuatro",
		"veinticinco",
		"veintiséis",
		"veintisiete",
		"veintiocho",
		"veintinueve",
	],
	hundreds: [
		"cien",
		"doscientos",
		"trescientos",
		"cuatrocientos",
		"quinientos",
		"seiscientos",
		"setecientos",
		"ochocientos",
		"novecientos",
	],
	thousand: "mil",
	million: {
		singular: "un millón",
		plural: "millones",
	},
	connector: "y",
};

const englishConfig: IEnglishConfig = {
	zeroe: "zero",
	units: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
	tens: ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
	special: [
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	],
	hundreds: [
		"one hundred",
		"two hundred",
		"three hundred",
		"four hundred",
		"five hundred",
		"six hundred",
		"seven hundred",
		"eight hundred",
		"nine hundred",
	],
	thousand: "thousand",
	million: {
		singular: "one million",
		plural: "millions",
	},
	connector: "and",
};

export const languageConfig: Record<LANGUAGE, TLanguageConfig> = {
	[LANGUAGE.SPANISH]: spanishConfig,
	[LANGUAGE.ENGLISH]: englishConfig,
};
