import express from 'express';
import useragent from 'express-useragent';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import * as path from 'path';
import { API_PATH, CORS_OPTIONS, MESSAGE_API } from './common/constants/common';
import router from './routers';
import logRequestHandler from './common/middlewares/logRequestHandler';
import notFoundResponseHandler from './common/middlewares/notFoundResponseHandler';
import successResponseHandler from './common/middlewares/successResponseHandler';
import errorHandler from './common/middlewares/errorHandler';

const app = express();
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));
app.use(logRequestHandler);
app.use(helmet());
app.use(cors(CORS_OPTIONS));
app.use(useragent.express());
app.use(compression());
app.use(express.json());
app.get('/', (_, res) => {
    res.send({ message: MESSAGE_API });
});
app.use(`${API_PATH}`, router);
app.use(successResponseHandler);
app.use(notFoundResponseHandler);
app.use(errorHandler);

export default app;
