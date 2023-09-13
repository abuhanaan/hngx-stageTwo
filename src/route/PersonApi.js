const express = require("express");

const {
  createPersonController,
  getPersonController,
  updatePersonController,
  deletePersonController,
} = require("../controller/PersonController");

const validateFields = require("../middleware/FieldValidation");
const personCreationSchema = require("../utils/validations/ValidatePersonCreationRequest");

const router = new express.Router();

router.post(
  "/api",
  validateFields(personCreationSchema),
  createPersonController
);
router.get("/api/:id", getPersonController);
router.put("/api/:id", updatePersonController);
router.delete("/api/:id", deletePersonController);

module.exports = router;
