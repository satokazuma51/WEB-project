const Joi = require('joi');

const transactionValidation = Joi.object({
  title: Joi.string().min(3).required(),
  amount: Joi.number().positive().required(),
  category: Joi.string().required(),
  date: Joi.date().required(),
});

module.exports = { transactionValidation };
