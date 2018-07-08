const express = require('express')
const userRouter = require('./resources/user/user.router')

const router = express.Router()

router.get('/', (req, res) => {
	res.json({message: 'get api now'})
})

router.use('/user', userRouter)

module.exports = router