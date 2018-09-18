const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Schema = mongoose.Schema;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
const ConnectToDB = require('./config/db-connect')


const boatSchema = new Schema({
  model: {
    type: String,
  }
})
const Boat = mongoose.model('boats', boatSchema)

ConnectToDB(function(boatsCollection) {
app.get('/boats', (req, res) => {
  
 Boat.find().then((data) => {
  //  console.log(data)
    res.send(data)

  }).catch(err => console.log(err))

});
app.get('/boats/:id', (req, res) => {
     Boat.findById(req.params.id).then((data) => {
       console.log(data)
       res.send(data)
     }).catch(err => console.log(err))
})

})


app.listen(5000, () => {
  console.log('Listening on port 5000');
});
