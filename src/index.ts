import logger from './common/logger';
import loadEnvironment from './config/env';
import { initialize } from './container';

(async () => {
    try {
        await loadEnvironment();
        await initialize();
    } catch (error) {
        if (error instanceof Error) logger.error(error.message);
        else logger.error(error);
    }
})();
