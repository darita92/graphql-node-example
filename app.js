const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
  navi: 'Look Out!'
}));

module.exports = app;