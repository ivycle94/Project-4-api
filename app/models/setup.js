const mongoose = require('mongoose')
const User = require('./user')
const { Schema, model } = mongoose

const outfitsSchema = new mongoose.Schema(
    {
        Title: {
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



module.exports = mongoose.model('Setup', SetupSchema)