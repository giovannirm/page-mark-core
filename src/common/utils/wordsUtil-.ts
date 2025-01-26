import { LANGUAGE, NUM } from "../enums/common";
import { logger } from "../logger/logger";

export default class WordsUtil {
	private static readonly languages: Record<LANGUAGE, any> = {
		[LANGUAGE.SPANISH]: {
			zero: "cero",
			units: {
				[NUM.ZERO]: "cero",
				[NUM.ONE]: "uno",
				[NUM.TWO]: "dos",
				[NUM.THREE]: "tres",
				[NUM.FOUR]: "cuatro",
				[NUM.FIVE]: "cinco",
				[NUM.SIX]: "seis",
				[NUM.SEVEN]: "siete",
				[NUM.EIGHT]: "ocho",
				[NUM.NINE]: "nueve",
			},
			tens: {
				[NUM.ONE]: "diez",
				[NUM.TWO]: "veinte",
				[NUM.THREE]: "treinta",
				[NUM.FOUR]: "cuarenta",
				[NUM.FIVE]: "cincuenta",
				[NUM.SIX]: "sesenta",
				[NUM.SEVEN]: "setenta",
				[NUM.EIGHT]: "ochenta",
				[NUM.NINE]: "noventa",
			},
			special: {
				[NUM.TEN]: "diez",
				[NUM.ELEVEN]: "once",
				[NUM.TWELVE]: "doce",
				[NUM.THIRTEEN]: "trece",
				[NUM.FOURTEEN]: "catorce",
				[NUM.FIFTEEN]: "quince",
				[NUM.SIXTEEN]: "dieciséis",
				[NUM.SEVENTEEN]: "diecisiete",
				[NUM.EIGHTEEN]: "dieciocho",
				[NUM.NINETEEN]: "diecinueve",
				[NUM.TWENTY_ONE]: "veintiuno",
				[NUM.TWENTY_TWO]: "veintidós",
				[NUM.TWENTY_THREE]: "veintitrés",
				[NUM.TWENTY_FOUR]: "veinticuatro",
				[NUM.TWENTY_FIVE]: "veinticinco",
				[NUM.TWENTY_SIX]: "veintiséis",
				[NUM.TWENTY_SEVEN]: "veintisiete",
				[NUM.TWENTY_EIGHT]: "veintiocho",
				[NUM.TWENTY_NINE]: "veintinueve",
			},
			hundreds: {
				[NUM.ONE]: "cien",
				[NUM.TWO]: "doscientos",
				[NUM.THREE]: "trescientos",
				[NUM.FOUR]: "cuatrocientos",
				[NUM.FIVE]: "quinientos",
				[NUM.SIX]: "seiscientos",
				[NUM.SEVEN]: "setecientos",
				[NUM.EIGHT]: "ochocientos",
				[NUM.NINE]: "novecientos",
			},
			thousand: "mil",
			million: {
				singular: "un millón",
				plural: "millones",
			},
			connector: "y",
		},
	};

	static numberToWords(num: number, language: LANGUAGE = LANGUAGE.SPANISH): string {
		logger.debug(`Number to words: ${num} in ${language} language`);
		const config = WordsUtil.languages[language];

		if (num === NUM.ZERO) return config.zero;

		const words: string[] = [];

		const millions = Math.floor(num / NUM.ONE_MILLION);
		if (millions > NUM.ZERO) {
			words.push(WordsUtil.numberToWords(millions, language));
			words.push(millions === NUM.ONE ? config.million.singular : config.million.plural);
		}
		num %= NUM.ONE_MILLION;

		const thousands = Math.floor(num / NUM.ONE_THOUSAND);
		if (thousands === NUM.ONE) {
			words.push(config.thousand);
		} else if (thousands > NUM.ZERO) {
			words.push(WordsUtil.numberToWords(thousands, language));
			words.push(config.thousand);
		}
		num %= NUM.ONE_THOUSAND;

		const hundreds = Math.floor(num / NUM.ONE_HUNDRED);
		if (hundreds > NUM.ZERO) {
			words.push(config.hundreds[hundreds]);
		}
		num %= NUM.ONE_HUNDRED;

		if (language === LANGUAGE.SPANISH) {
			if ((num >= NUM.TEN && num < NUM.TWENTY) || (num > NUM.TWENTY && num < NUM.THIRTY)) {
				words.push(config.special[num]);
			} else {
				const tens = Math.floor(num / NUM.TEN);
				if (tens > NUM.ZERO) {
					words.push(config.tens[tens]);
				}
				num %= NUM.TEN;
				if (num > NUM.ZERO) {
					if (tens > NUM.ZERO) {
						words.push(config.connector);
					}
					words.push(config.units[num]);
				}
			}
		}

		return words.join(" ");
	}
}
