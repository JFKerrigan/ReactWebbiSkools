const mongoose = require('mongoose')

const Quiz = new mongoose.Schema(
	{
        title: { type: String, required: true },
        question: {type: String, required: true},
        correctAnswer: {type: String, required: true},
        answer1: {type: String, required: true},
        answer2: {type: String, required: true},
        answer3: {type: String},
        answer4: {type: String},

    },

	{ collection: 'Quiz' }, {minimize: true}
)


const model = mongoose.model('Quiz', Quiz)

module.exports = model