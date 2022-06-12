const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rescue = require('express-rescue');
const routes = require('../routes/peopleRouter')
const cors = require('cors')
const middleware = require('../middlewares/index')
const limiter = require('../utils/rateLimit')
const helmet = require("helmet");
const morgan = require("morgan")

app.use(morgan("common"))
app.use(helmet()); //for security Express.js purposes
app.use(cors());
app.use(limiter)
app.use(bodyParser.json());
app.use('/people', rescue(routes.peopleRouter))
app.use(middleware.errorMiddleware)

module.exports = app
