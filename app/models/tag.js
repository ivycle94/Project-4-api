const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
		},
		setup: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Setup'
		}],
	},
	{timestamps: true,}
)

module.exports = mongoose.model('Tag', tagSchema)