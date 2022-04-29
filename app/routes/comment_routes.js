// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for comments
const Comment = require('../models/comment')
const Setup = require('../models/setup')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { comment: { title: '', text: 'foo' } } -> { comment: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// const setup = require('../models/setup')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /comment
router.post('/comments/:setupId', requireToken, (req, res, next) => {
	// set owner of new comment to be current user
	req.body.comment.owner = req.user.id

	// ========== ATTEMPT #1?
	// Comment.create(req.body.comment)
	// 	// respond to succesful `create` with status 201 and JSON of new "comment"
	// 	.then((comment) => {
	// 		res.status(201).json({ comment: comment.toObject() })
	// 	})
	// 	// if an error occurs, pass it off to our error handler
	// 	// the error handler needs the error message and the `res` object so that it
	// 	// can send an error message back to the client
	// 	.catch(next)

	// ========== SOLUTION #2?
	// Setup.findById(setupId)
	// 	.then(setup => {
	// 		setup.comments.push(req.body.comment)
	// 	})
	// 	.then(() => {
	// 		res.sendStatus(204)
	// 	})
	// 	.catch(console.error)

	// ========== SOLUTION #3?
	const comment = req.body.comment
	req.body.comment.owner = req.user.id
	//get our setupId from req.params.id
	const setupId = req.params.setupId
	console.log("THIS IS SETUPID LOOK EHGRE\n", setupId)
	//find the setup
	Setup.findById(setupId)
		.then(handle404)
	//push the comment to the comments array
		.then(setup => {
			// requireOwnership(req, setup)
			console.log('this is the setup', setup)
			console.log('this is the comment', comment)
			setup.comments.push(comment)
			//save the setup
			return setup.save()
		})
	//then we send the setup as json
		.then(setup => res.status(201).json({setup: setup}))
	//catch errors and send to the handler
		.catch(next)

})

// UPDATE
// PATCH /comment/5a7db6c74d55bc51bdf39793
router.patch('/comments/:setupId/:comId', requireToken, removeBlanks, (req, res, next) => {
	// if the client attempts to change the `owner` property by including a new
	// owner, prevent that by deleting that key/value pair
	delete req.body.comment.owner

	Comment.findById(req.params.id)
		.then(handle404)
		.then((comment) => {
			// pass the `req` object and the Mongoose record to `requireOwnership`
			// it will throw an error if the current user isn't the owner
			requireOwnership(req, comment)

			// pass the result of Mongoose's `.update` to the next `.then`
			return comment.updateOne(req.body.comment)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// DESTROY
// DELETE /comments/5a7db6c74d55bc51bdf39793
router.delete('/comments/:setupId/:comId', requireToken, (req, res, next) => {
	Comment.findById(req.params.id)
		.then(handle404)
		.then((comment) => {
			// throw an error if current user doesn't own `comment`
			requireOwnership(req, comment)
			// delete the comment ONLY IF the above didn't throw
			comment.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

module.exports = router
