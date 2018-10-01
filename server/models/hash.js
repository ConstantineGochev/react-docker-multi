const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hashSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    user: {type: Schema.Types.ObjectId, ref: 'users'}
})




const Hash = mongoose.model('hash', hashSchema)
module.exports = Hash