const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openairRoutes'));

app.listen(port, () => console.log(`listening on port ${port}`))