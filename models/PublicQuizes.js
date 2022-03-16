const mongoose = require('mongoose');

const PublicQuizDataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    userName: {
        type: String
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
    userPostId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
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
