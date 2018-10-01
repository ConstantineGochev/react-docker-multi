const AuthController = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false})

module.exports = function (app) {
    app.post('/signup', AuthController.signup)
    app.post('/signin',requireSignin, AuthController.signin)
    app.get('/validate_user/:hash', AuthController.validate_user)

    app.get('/', requireAuth, function(req, res, next) {
        res.send({hi: 'there'})
    })

}