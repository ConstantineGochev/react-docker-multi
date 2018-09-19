const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const boatSchema = new Schema({
  model: {
    type: String,
  }
})
const Boat = mongoose.model('boats', boatSchema)


module.exports = Boat