const express = require("express");
const {
  allResponses,
  createForm,
  getFormById,
  submitResponse,
} = require("../controllers/formControllers");
const router = express.Router();

// Create a new form
router.post("/create", createForm);

// Get a form by ID
router.get("/:id", getFormById);

// Submit form responses
router.post("/:id/submit", submitResponse);

// Get all responses for a particular form
router.get("/:id/responses", allResponses);

module.exports = router;
