const express = require('express')

const router = express.Router()

router.route('/')
	.get((req, res) => res.json({val: 'get users'}))
	.post((req, res) => res.json({val: 'post user'}))

router.route('/:id')
	.get((req, res) => res.json({val: 'get user'}))
	.put((req, res) => res.json({val: 'put user'}))
	.delete((req, res) => res.json({val: 'delete user'}))

module.exports = router