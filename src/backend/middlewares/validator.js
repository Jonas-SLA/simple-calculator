const Joi = require('joi');

const calculateSchema = Joi.object({
    expression: Joi.string()
        .max(100) 
        .regex(/^[0-9+\-*/().\s]+$/) 
        .required()
        .messages({
            'string.pattern.base': 'Expression contains invalid characters.',
            'string.max': 'Expression is too long.'
        })
});

const validateExpression = (req, res, next) => {
    const { error } = calculateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            error: "Bad Request", 
            message: error.details[0].message 
        });
    }
    next();
};

module.exports = { validateExpression };
