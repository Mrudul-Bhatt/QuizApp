const Questions = require('../models/questions');

exports.readQuestions = (req, res) => {
    Questions.find()
        .then(feed => res.status(200).json(feed))
        .catch(err => res.status(404).json(err));
};

exports.createQuestion = (req, res) => {
    const Question = new Questions({
        question : req.body.question,
        answers : req.body.answers,
        correct: req.body.correct,
        questionId: req.body.questionId
    });

    Question.save()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
};

exports.readQuestion_ObjectId = (req, res) => {
    Questions.findById(req.params.postId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
};

exports.readQuestion_questionId = (req, res) => {
    Questions.find({ questionId: req.params.postId })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
};

exports.deleteQuestion_ObjectId = (req, res) => {
    Questions.findByIdAndRemove(req.params.postId)
        .then(data => res.status(200).json({ message: "Question deleted successfully" }))
        .catch(err => res.status(400).json(err));
};

exports.deleteQuestion_questionId = (req, res) => {
    Questions.findOneAndRemove({ questionId: req.params.postId })
        .then(data => res.status(200).json({ message: "Question deleted successfully" }))
        .catch(err => res.status(400).json(err));
};

exports.updateQuestion_ObjectId = (req, res) => {
    Questions.findByIdAndUpdate(req.params.postId, {
        question: req.body.question,
        answers: req.body.answers,
        correct: req.body.correct,
        questionId: req.body.questionId
    })
        .then(data => res.status(200).json({ message: "Question updated successfully" }))
        .catch(err => res.status(400).json(err));
};

exports.updateQuestion_questionId = (req, res) => {
    Questions.findOneAndUpdate({ questionId: req.params.postId }, {
        question: req.body.question,
        answers: req.body.answers,
        correct: req.body.correct,
        questionId: req.body.questionId
    })
        .then(data => res.status(200).json({ message: "Question updated successfully" }))
        .catch(err => res.status(400).json(err));
};