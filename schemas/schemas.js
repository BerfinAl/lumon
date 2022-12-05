const Joi = require("joi")

module.exports =   employeeSchema = Joi.object({
    employee: Joi.object({
        ID: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]')),
        Name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        Email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        Profession: Joi.string()
             .required(),
        Address: Joi.string()
            .required(),
        Education: Joi.string()
            .required(),
        Gender: Joi.required(),
    }).required()
})

