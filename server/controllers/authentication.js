const User = require('../models/user')
const Hash = require('../models/hash')
const jwt = require('jwt-simple');
const crypto = require("crypto");
const sendMail = require('../services/mailer');



function token_for_user (user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp},'asdsdss')
}

exports.signup = function (req, res, next) {
    const { email, password } = req.body

    if(!email || !password) {
        return res.status(422).json({error: 'Please provide email and password.'})
    }
    User.findOne({ email }, function (err, existingUser) {
        if (err) return next(err)

        if (existingUser) {
            return res.status(422).json({ error: 'Email is in use.' })
        }
        const user = new User({
            email,
            password
        })
        user.save(function (err) {
            if (err) return next(err)
            const value = crypto.randomBytes(20).toString('hex');
            const hash = new Hash({
                value,
                user: user._id         
            })
            var link = `http://localhost:4000/api/validate_user/${value}`
            hash.save((err) => {
                if (err)return next(err)
                sendMail(user.email, link)
                res.send('Validate you account by clicking the link in your email.')
            })


            //res.json({token: token_for_user(user)})
        });

    })

}

exports.signin = function(req, res, next) {
    //we get req.user from signin middleware because we called done with the user after the password compare

    res.send({token: token_for_user(req.user)})
}

exports.validate_user = async function (req, res) {

    const hash = await Hash.find({ value: req.params.hash })

    //hash is an array
    await User.find({ _id: hash[0].user }, function (err, user) {
        if (err) return console.log(err)
        user[0].verified = true
        user[0].save()
        res.redirect('http://localhost:4000/profile')
        console.log(user)
    })




}