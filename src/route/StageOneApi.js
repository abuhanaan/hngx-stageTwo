const express = require("express");
const firstStageController = require("../controller/StageOneController");

const router = new express.Router();

router.get("/api", firstStageController);

module.exports = router;
