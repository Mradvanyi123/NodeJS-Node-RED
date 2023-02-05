const Joi = require('joi')

const schemas = {
    userSchema: Joi.object().keys({
            users: Joi.array().items(
                Joi.object().keys({
                    userName: Joi.string().trim().required(),
                    email: Joi.string().trim().required(),
                    address: Joi.string().trim().required(),
                    creationTimestamp: Joi.string().trim().required(),
                })
            )
        }
    ).options({abortEarly: false,}),
};
module.exports = schemas;