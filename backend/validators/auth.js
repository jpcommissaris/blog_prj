const {check} = require('express-validator')

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is Required'), 
    check('email')
        .isEmail()
        .withMessage('Must be valid email'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be 6 characters')
]
exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be valid email'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be 6 characters')
]