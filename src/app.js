const express = require('express');
const cors = require('cors');

const app = express();

const api = require('./routes/api.route');
const user = require('./routes/user.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/', api);
app.use('/api', user);

module.exports = app;