const Boat = require('../models/boat')

exports.getBoatsData = function (req, res, next) {
    Boat.find().then((data) => {
        console.log(data)
        res.send(data)

    }).catch(err => console.log(err))
}

exports.getSingleBoatData = function (req, res, next) {
    Boat.findById(req.params.id).then((data) => {
        console.log(data)
        res.send(data)
    }).catch(err => console.log(err))
}