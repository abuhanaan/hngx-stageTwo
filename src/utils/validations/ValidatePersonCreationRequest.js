const yup = require("yup");

const personCreationSchema = yup.object({
  name: yup.string().required(),
  state: yup.string(),
  gender: yup.string(),
  age: yup.number().positive().integer(),
});

module.exports = personCreationSchema;
