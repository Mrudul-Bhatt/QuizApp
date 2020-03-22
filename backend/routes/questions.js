const express= require('express');

const router = express.Router();

const questionController = require('../controllers/questions');

//READ all questions
router.get('/', questionController.readQuestions);

//CREATE a question
router.post('/', questionController.createQuestion);

//READ a question based on ObjectID(_id)
router.get('/:postId', questionController.readQuestion_ObjectId);

//READ a question based on questionId 
router.get('/find/:postId', questionController.readQuestion_questionId);

//DELETE a question based on ObjectID(_id)
router.delete('/:postId', questionController.deleteQuestion_ObjectId);

//DELETE a question based on questionId 
router.delete('/delete/:postId', questionController.deleteQuestion_questionId);

//UPDATE a question based on ObjectID(_id)
router.patch('/:postId', questionController.updateQuestion_ObjectId);

//UPDATE a question based on questionId
router.patch('/update/:postId', questionController.updateQuestion_questionId);

module.exports = router;