import { PrismaClient } from '@prisma/client';
import logger from '../../logger';
import { NUM } from '../../enums/common';

export const prismaClient = new PrismaClient();

export const checkDatabaseConnection = async (client: PrismaClient): Promise<void> => {
    const databaseUrl = process.env.DATABASE_URL as string;
    try {
        const parsedUrl = new URL(databaseUrl);
        const databaseName = parsedUrl.pathname.split('/').pop();
        await client.$connect();
        logger.debug(`Connection to [${databaseName}] database successfully.`);
        const nowUTC = new Date().toISOString();
        logger.debug(`Current UTC time: ${nowUTC}`);
        const nowLocal = new Date().toLocaleString();
        logger.debug(`Current Local time: ${nowLocal}`);
    } catch (error) {
        logger.error(`Could not connect to the database: ${error}`);
        process.exit(NUM.ONE);
    } finally {
        await client.$disconnect();
    }
};
