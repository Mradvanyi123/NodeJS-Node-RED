const validationMiddleware = (schema, property) => {
    console.log("validationMiddleware")
    return async (req, res, next) => {
        const {error} = schema.validate(req[property]);
        const valid = error == null;
        if (valid) {
            return  next();
        } else {
            const {details} = error;
            const message = details.map(i => i.message).join(',');
            return res.status(406).json({error: message});
        }
    }
}

module.exports = {validationMiddleware};
