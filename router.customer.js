const router = require('express').Router()
const Customer = require('./model.customer')

router.get('/', (req, res) => {
    console.log(Customer)
    res.json([])
})

module.exports = router
