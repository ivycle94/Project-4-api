// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Tag = require('../models/tag')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
const setup = require('../models/setup')
const { ConnectionCheckOutFailedEvent } = require('mongodb')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /setups
// W O R K S //
router.get('/tags', requireToken, (req, res, next) => {
	Tag.find()
		.then((tags) => {
			// `setups` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return tags.map((tag) => tag.toObject())
		})
		// respond with status 200 and JSON of the setups
		.then((tags) => res.status(200).json({ tags: tags }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// CREATE
// POST /tags
router.post('/tags', requireToken, (req, res, next) => {
	// set owner of new example to be current user
    const tag = req.body.tag

	Tag.create(tag)
        .then(tag => {
            res.status(201).json({ tag: tag.toObject() })
        })
		// if an error occurs, pass it off to our error handler
		// the error handler needs the error message and the `res` object so that it
		// can send an error message back to the client
		.catch(next)
})


// DESTROY
// DELETE /tags/5a7db6c74d55bc51bdf39793
// router.delete('/tags/:setupId/:tagId', requireToken, (req, res, next) => {
// 	Example.findById(req.params.id)
// 		.then(handle404)
// 		.then((example) => {
// 			// throw an error if current user doesn't own `example`
// 			requireOwnership(req, example)
// 			// delete the example ONLY IF the above didn't throw
// 			example.deleteOne()
// 		})
// 		// send back 204 and no content if the deletion succeeded
// 		.then(() => res.sendStatus(204))
// 		// if an error occurs, pass it to the handler
// 		.catch(next)
// })

module.exports = router
