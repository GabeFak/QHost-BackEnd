const mongoose = require('mongoose');

const PublicQuizDataSchema = mongoose.Schema({
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
        type: Array,
        require: true
    },
    isPublished: {
        type: String,
        default: 'Unpublished'
    },
    views: {
        type: Number,
        default: 0
    },
    date: {
        type: String
    }
});

module.exports = mongoose.model('PublicQuizes', PublicQuizDataSchema);

// {
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
//     }}
// }
