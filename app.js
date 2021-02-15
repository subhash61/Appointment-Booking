const express = require('express');
const clientRouter = require('./routes/clientRoutes');
const timeRouter = require('./routes/timeRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/clients', clientRouter);
app.use('/api/v1/slots', timeRouter);

module.exports = app;
