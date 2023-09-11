const validateInput = (res, input) => {
  const re = new RegExp("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$");
  const validInput = re.test(input);
  if (!validInput) {
    return res.status(400).send({
      status: false,
      message: `${input} field is not valid`,
    });
  }
};

module.exports = validateInput;
