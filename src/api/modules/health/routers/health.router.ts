import { Router } from 'express';
import { container } from 'tsyringe';
import HealthController from '../controllers';
import { createHealthValidation, showHealthValidation } from '../middlewares';
import TYPES from '../../../../common/constants/types';

const healthRouter: Router = Router();
const healthController = container.resolve<HealthController>(TYPES.HealthController);

healthRouter.post('/create', createHealthValidation, healthController.create.bind(healthController));
healthRouter.get('/show/:id', showHealthValidation, healthController.show.bind(healthController));

export default healthRouter;
