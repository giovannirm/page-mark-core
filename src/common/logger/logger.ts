import winston from "winston";

export const logger = winston.createLogger({
	level: "debug",
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.errors({ stack: true }),
		winston.format.splat(),
		winston.format.json(),
		winston.format.printf(({ timestamp, level, message }) => {
			const levelPad = `[${level}]`.padEnd(8, " ");
			const log = `${timestamp} ${levelPad}: `
			const coloredLog = winston.format.colorize().colorize(level, log);
			return `${coloredLog}${message}`;
		})
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: `${__dirname}/../logs/log-api.log`,
			maxsize: 5120000,
			maxFiles: 5,
		}),
	],
});
