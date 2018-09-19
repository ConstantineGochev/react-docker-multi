const BoatsController = require('../controllers/boats')


module.exports = function (app) {
    app.get('/boats', BoatsController.getBoatsData);
    app.get('/boats/:id', BoatsController.getSingleBoatData)
}