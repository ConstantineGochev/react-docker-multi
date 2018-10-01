const express = require('express');
const process = require('process');
const bodyParser = require('body-parser')
const http = require('http');
const morgan = require('morgan')
const port = 5000 || process.env.PORT
const Boat = require('./models/boat')

const app = express();
const server = http.createServer(app)
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({type: '*/*'}))

const ConnectToDB = require('./config/db-connect')
ConnectToDB()


    require('./routes/authRoutes')(app)
    require('./routes/boatRoutes')(app)



server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
