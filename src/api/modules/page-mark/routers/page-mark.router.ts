import { Router } from 'express';
import { container } from 'tsyringe';
import PageMarkController from '../controllers';
import TYPES from '../../../../common/constants/types';
import { pageMarkMulterMiddleware, pageMarkPaginateMiddleware } from '../middlewares';

const pageMarkRouter: Router = Router();
const pageMarkController = container.resolve<PageMarkController>(TYPES.PageMarkController);

pageMarkRouter.post(
    '/paginate',
    pageMarkMulterMiddleware,
    pageMarkPaginateMiddleware,
    pageMarkController.paginate.bind(pageMarkController)
);

export default pageMarkRouter;
