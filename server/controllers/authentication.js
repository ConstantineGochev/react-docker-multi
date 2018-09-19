const User = require('../models/user')
const jwt = require('jwt-simple')

function token_for_user (user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp},'asdsdss')
}

exports.signup = function (req, res, next) {
    const { email, password } = req.body

    if(!email || !password) {
        return res.status(422).send({error: 'Please provide email and password.'})
    }
    User.findOne({ email }, function (err, existingUser) {
        if (err) return next(err)

        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use.' })
        }
        const user = new User({
            email,
            password
        })
        user.save(function (err) {
            if (err) return next(err)
            res.json({token: token_for_user(user)})
        });

    })

}

exports.signin = function(req, res, next) {
    //we get req.user from signin middleware because we called done with the user after the password compare

    res.send({token: token_for_user(req.user)})
}