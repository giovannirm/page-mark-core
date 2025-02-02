import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import logger from '../common/logger';

const loadConfig = async (path: string) => {
    if (dotenv.config({ path }).error) {
        logger.error('Error loading environment variables from file');
    } else {
        logger.info('Environment variables loaded successfully');
    }
};

const refactorConnector = async () => {
    const { PGSQL_USER, PGSQL_PASSWORD, PGSQL_HOST, PGSQL_PORT, PGSQL_DATABASE, PGSQL_SCHEMA } = process.env;
    const databaseUrl = `postgresql://${PGSQL_USER}:${PGSQL_PASSWORD}@${PGSQL_HOST}:${PGSQL_PORT}/${PGSQL_DATABASE}?schema=${PGSQL_SCHEMA}&connection_limit=20`;
    process.env.DATABASE_URL = databaseUrl;
};

export default async function loadEnvironment() {
    let envFile = path.resolve(__dirname, '../config', `.env.${process.env.APP_ENV}`);
    if (!fs.existsSync(envFile)) {
        envFile = path.resolve(__dirname, '.env');
    }

    await loadConfig(envFile);
    await refactorConnector();
}
