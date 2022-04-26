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


// CREATE
// POST /tags
router.post('/tags/:setupId', requireToken, (req, res, next) => {
	// set owner of new example to be current user
	req.body.example.owner = req.user.id
    const setupId = req.params.setupId
    const tag = req.body.tag

	Setup.findById(setupId)
        .then((setup => {
            console.log("This is the setup\n", setup)
            Tag.create(tag)
                .then(tag => {
                    console.log("this is the new tag\n", tag)
                    setup.tags.push(tag)
                    setup.save()
                    res.status(201).json({ tag:tag.toObject()})
                })
        }))
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
