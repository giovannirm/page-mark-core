export interface ISpanishConfig {
    zero: string;
    units: string[];
    tens: string[];
    special: string[];
    hundreds: string[];
    thousand: string;
    million: {
        singular: string;
        plural: string;
    };
    connector: string;
}

export interface IEnglishConfig {
    zero: string;
    units: string[];
    tens: string[];
    special: string[];
    hundreds: string[];
    thousand: string;
    million: {
        singular: string;
        plural: string;
    };
    connector: string;
}

export type TLanguageConfig = ISpanishConfig | IEnglishConfig;
