import { NUM } from '../../enums/common';
import { LANGUAGE } from '../../enums/number/language';
import logger from '../../logger';
import { languageConfig } from './config';
import { IEnglishConfig, ISpanishConfig } from './types';

export default class WordsUtil {
    private static readonly languages = languageConfig;

    static numberToWordsEs(number: number, config: ISpanishConfig): string {
        if (number === NUM.ZERO) return config.zero;

        const words: string[] = [];

        const millions = Math.floor(number / NUM.ONE_MILLION);
        if (millions > NUM.ZERO) {
            words.push(WordsUtil.numberToWordsEs(millions, config));
            words.push(millions === NUM.ONE ? config.million.singular : config.million.plural);
        }
        number %= NUM.ONE_MILLION;

        const thousands = Math.floor(number / NUM.ONE_THOUSAND);
        if (thousands === NUM.ONE) {
            words.push(config.thousand);
        } else if (thousands > NUM.ZERO) {
            words.push(WordsUtil.numberToWordsEs(thousands, config));
            words.push(config.thousand);
        }
        number %= NUM.ONE_THOUSAND;

        const hundreds = Math.floor(number / NUM.ONE_HUNDRED);
        if (hundreds > NUM.ZERO) {
            words.push(config.hundreds[hundreds]);
        }
        number %= NUM.ONE_HUNDRED;

        if ((number >= NUM.TEN && number < NUM.TWENTY) || (number > NUM.TWENTY && number < NUM.THIRTY)) {
            words.push(config.special[number]);
        } else {
            const tens = Math.floor(number / NUM.TEN);
            if (tens > NUM.ZERO) {
                words.push(config.tens[tens]);
            }
            number %= NUM.TEN;
            if (number > NUM.ZERO) {
                if (tens > NUM.ZERO) {
                    words.push(config.connector);
                }
                words.push(config.units[number]);
            }
        }

        return words.join(' ');
    }

    // TODO: Implementar la conversión de números a palabras en inglés
    static numberToWordsEn(number: number, config: IEnglishConfig): string {
        return `${number} ${config}`;
    }

    static numberToWords(number: number, language: LANGUAGE = LANGUAGE.SPANISH): string {
        logger.debug(`Number to words: ${number} in ${language} language`);

        const config = WordsUtil.languages[language];

        if (!config) {
            throw new Error(`Language ${language} not supported`);
        }

        switch (language) {
            case LANGUAGE.SPANISH:
                return WordsUtil.numberToWordsEs(number, config as ISpanishConfig);
            case LANGUAGE.ENGLISH:
                return WordsUtil.numberToWordsEn(number, config as IEnglishConfig);
            default:
                throw new Error(`Language ${language} not supported`);
        }
    }

    static format(format: string, number: number, language: LANGUAGE = LANGUAGE.SPANISH): string {
        const numberText = WordsUtil.numberToWords(number, language);
        return format.replace('%n', number.toString()).replace('%w', numberText);
    }
}
