import { celebrate, Joi, Segments } from "celebrate";

const creationHealth = {
	create_date_manual: Joi.string().isoDate().required(),
};

const id = {
	id: Joi.number().integer().required(),
};

export const createHealthValidation = celebrate({
	[Segments.BODY]: Joi.object().keys(creationHealth),
});

export const showHealthValidation = celebrate({
	[Segments.PARAMS]: Joi.object().keys(id),
});
