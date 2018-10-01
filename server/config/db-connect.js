const mongoose = require('mongoose');

module.exports = (cb) => {
    var options = { replset: { socketOptions: { connectTimeoutMS: 1000 } } };
    mongoose.connect(
        'mongodb://mongo:27017/platform',
        {useNewUrlParser: true},
        function (err, db) {
            if (err) {
                console.log(err)
            }

            db.collection('boats').insertMany([{ model: 'Boat_1' }, { model: 'Boat_2' }, { model: 'Boat_3' }])

            return cb(db)
        }, options)
       //     mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}