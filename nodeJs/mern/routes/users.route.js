const { Router } = require('express')
const router = Router()
const { validationResult } = require('express-validator')
const User = require('../models/User')


// /api/users/getUsers
router.get('/getUsers',
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Something went wrong ...'
                })
            }

            const users = await User.find({})

            if (!users) {
                return res.status(400).json({ message: 'Users is not exist' })
            } else {
                res.json({ users: users })
            }

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again ..' })
        }
    })

// /api/users/:id
router.get('/:id',
    async (req, res) => {
        try {
            const id = req.params.id
            const user = await User.findOne({ _id: id })

            if (!user) {
                return res.status(400).json({ message: 'User is not exist' })
            } else {
                res.json({ user: user })
            }

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again ..' })
        }
    })




module.exports = router