const mongoose = require('mongoose')

const Quiz = new mongoose.Schema(
	{
		title: { type: String, required: true },
	},
	{ collection: 'Quiz' }
)

const model = mongoose.model('Quiz', Quiz)

module.exports = model