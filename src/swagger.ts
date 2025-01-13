import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { logger } from "./common/logger/logger";

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "API Documentation",
			version: "1.0.0",
			description: "API documentation for the project",
		},
		servers: [
			{
				url: "http://localhost:3333",
			},
		],
	},
	apis: ["./src/api/modules/**/*.ts"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default function setupSwagger(app: Express) {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
	logger.debug("Swagger docs available at /api-docs");
}
