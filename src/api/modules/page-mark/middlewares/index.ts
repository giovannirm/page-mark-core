import { celebrate, Joi, Segments } from 'celebrate';
import upload from '../../../../common/utils/multer';

const fileKey = 'pdfFile';

export const pageMarkMulterMiddleware = upload.single(fileKey);

const positionSchema = {
    x: Joi.number().required(),
    y: Joi.number().required(),
};

export const pageMarkPaginateMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
        defaultPosition: Joi.object(positionSchema).required(),
        specificPositions: Joi.array()
            .items(
                Joi.object({
                    page: Joi.number().required(),
                    ...positionSchema,
                })
            )
            .optional(),
    }),
});
