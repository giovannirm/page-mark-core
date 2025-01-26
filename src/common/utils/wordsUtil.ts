import { LANGUAGE, NUM } from "../enums/common";

export default class WordsUtil {
	private static readonly languages: Record<LANGUAGE, any> = {
		[LANGUAGE.SPANISH]: {
			zero: "cero",
			units: ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"],
			tens: ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"],
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
				"",
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
			connector: " y ",
			thousand: "mil",
			million: {
				singular: "un millón",
				plural: "millones",
			}
		}
	};

	static numberToWords(num: number, language: LANGUAGE = LANGUAGE.SPANISH): string {
		const config = WordsUtil.languages[language];

		if (num === NUM.ZERO) return config.zero;

		function translateTens(num: number): string {
			if (num < NUM.TEN) return config.units[num];
			if (num >= NUM.TEN && num < NUM.TWENTY) return config.[num - NUM.TEN];
			const d = Math.floor(num / NUM.TEN);
			const rest = num % NUM.TEN;

			return config.tens[d] + (rest > NUM.ZERO ? config.connector + config.units[rest] : "");
		}

		function translateHundreds(num: number): string {
			if (num === NUM.ZERO) return "";
			if (num === NUM.ONE_HUNDRED) return config.hundreds[NUM.ONE];

			const c = Math.floor(num / NUM.ONE_HUNDRED);
			const rest = num % NUM.ONE_HUNDRED;

			return config.hundreds[c] + (rest > NUM.ZERO ? " " + translateTens(rest) : "");
		}

		function translateThousands(num: number): string {
			if (num < NUM.ONE_THOUSAND) return translateHundreds(num);

			const thousands = Math.floor(num / NUM.ONE_THOUSAND);
			const rest = num % NUM.ONE_THOUSAND;

			return (
				(thousands === NUM.ONE ? config.singularThousand : translateHundreds(thousands) + " " + config.pluralThousand) +
				(rest > NUM.ZERO ? " " + translateHundreds(rest) : "")
			);
		}

		function translateMillions(num: number): string {
			if (num < NUM.ONE_MILLION) return translateThousands(num);

			const millions = Math.floor(num / NUM.ONE_MILLION);
			const rest = num % NUM.ONE_MILLION;

			return (
				(millions === NUM.ONE ? config.singularMillion : translateHundreds(millions) + " " + config.pluralMillion) +
				(rest > NUM.ZERO ? " " + translateThousands(rest) : "")
			);
		}

		return translateMillions(num);
	}
}
