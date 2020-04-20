const mongoose = require("mongoose");

const Question = new mongoose.Schema({
  questionId: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: [String],
  correct: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", Question);
