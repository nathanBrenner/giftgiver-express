const express = require('express')
const { userRouter } = require('./resources')
const apiErrorHandler = require('./modules/errorHandler')
const router = express.Router()

router.get('/', (req, res) => {
	res.json({message: 'get api now'})
})

router.use('/user', userRouter)
router.use(apiErrorHandler)

module.exports = router;