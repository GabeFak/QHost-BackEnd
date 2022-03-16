const mongoose = require('mongoose');

const UserQuizDataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    userName: {
        type: String,
        require: true
    },
    quizName: {
        type: String,
        required: true
    },
    quizQuestions: {
        type: Object,
        require: true
    },
    isPublished: {
        type: String,
        default: 'Unpublished'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserQuizData', UserQuizDataSchema);



// {
//     "quizName": "Quiz1",
//     "quizQuestions": {
//         "Q1": {
//         "title": "whats 2 + 2?",
//         "Answer": "4",
//         "WrongAnswer1": "5",
//         "WrongAnswer2": "5",
//         "WrongAnswer3": "5"
//     },
//     "Q2": {
//         "title": "whats 2 + 2?",
//         "Answer": "4",
//         "WrongAnswer1": "5",
//         "WrongAnswer2": "5",
//         "WrongAnswer3": "5"
//     }},
//     "isPublished": "Unpublished"
// }