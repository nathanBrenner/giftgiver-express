const express = require('express')
const controller = require('./user.controller')

const router = express.Router()

router.param('id', controller.findByParam)

router.route('/')
	.get(controller.getAll)
	.post(controller.createOne)

router.route('/:id')
	.get(controller.getOne)
	.put(controller.updateOne)
	.delete(controller.deleteOne)

module.exports = router