const firstStage = require("../service/StageOneService");

const firstStageController = async (req, res) => {
  const response = await firstStage(req, res);

  return response;
};

module.exports = firstStageController;
