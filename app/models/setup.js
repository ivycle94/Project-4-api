const mongoose = require('mongoose')
const User = require('./user')
const commentSchema = require('./comment')
const { Schema, model } = mongoose

const setupSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Tag'
        }],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
        },
        comments: [commentSchema]
    },

    {
		timestamps: true,
	}
)



module.exports = mongoose.model('Setup', setupSchema)