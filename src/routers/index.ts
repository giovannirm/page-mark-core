import { Router } from 'express';

import healthRouter from '../api/modules/health/routers/health.router';
import pageMarkRouter from '../api/modules/page-mark/routers/page-mark.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/page-mark', pageMarkRouter);

export default router;
