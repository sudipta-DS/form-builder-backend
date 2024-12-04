const Form = require("../models/Form");
const Response = require("../models/Response");

exports.createForm = async (req, res) => {
  const { title, headerImage, questions } = req.body;

  try {
    const form = new Form({ title, headerImage, questions });
    await form.save();
    res
      .status(201)
      .json({ message: "Form created successfully", formId: form._id });
  } catch (error) {
    res.status(500).json({ message: "Failed to create form", error });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.json(form);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch form", error });
  }
};

exports.submitResponse = async (req, res) => {
  const { responses } = req.body;

  try {
    const response = new Response({
      formId: req.params.id,
      responses,
    });
    await response.save();
    res.status(201).json({ message: "Response submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit response", error });
  }
};

exports.allResponses = async (req, res) => {
  const { id } = req.params;

  try {
    const responses = await Response.find({ formId: id });
    if (!responses.length) {
      return res
        .status(404)
        .json({ message: "No responses found for this form." });
    }
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching responses.", error });
  }
};
