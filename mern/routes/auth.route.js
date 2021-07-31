const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


//check User by email , if exist ? ' user is exist' : user.save() - in BD 
// /api/auth/register
router.post('/register',
    [
        check('email', 'email is not correct').isEmail(),
        check('password', 'min length of password is 6 length').isLength({ min: 6 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Not correct registration data'
                })
            }

            const { email, password } = req.body
            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'This user is exist' })
            } else {
                const hashedPassword = await bcrypt.hash(password, 12)
                const user = new User({ email, password: hashedPassword })

                await user.save()

                res.status(201).json({ message: 'User was created' })
            }

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again ..' })
        }
    })

//check User by email,than check pass is exist in BD ? return jwt tocken : 'error messsage'    
router.post('/login',// /api/auth/login
    [
        check('email', 'email is not correct').normalizeEmail().isEmail(),
        check('password', 'set pass ..').exists(),
    ],

    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Not correct registration data by login'
                })
            }

            const { email, password } = req.body
            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'User is not found' })
            }

            const isMatchedPass = await bcrypt.compare(password, user.password)

            if (!isMatchedPass) {
                return res.status(400).json({ message: 'Password is not correct' })
            }
            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )
            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again ..' })
        }

    })


module.exports = router