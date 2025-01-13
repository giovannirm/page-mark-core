import winston from "winston";

export const logger = winston.createLogger({
	level: "debug",
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.printf(({ timestamp, level, message }) => {
			const levelPad = `[${level}]`.padEnd(8, " ");
			const log = `${timestamp} ${levelPad}: `
			const coloredLog = winston.format.colorize().colorize(level, log);
			return `${coloredLog}${message}`;
		})
	),
	transports: [
		new winston.transports.File({
			maxsize: 5120000,
			maxFiles: 5,
			filename: `${__dirname}/../logs/log-api.log`,
		}),
		new winston.transports.Console(),
	],
});
