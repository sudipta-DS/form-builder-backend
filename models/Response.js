const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  responses: { type: mongoose.Schema.Types.Mixed },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Response", ResponseSchema);
