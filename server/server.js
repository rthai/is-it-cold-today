const morgan = require('morgan');
const path = require('path');
const express = require('express');

const app = express();
port = 4000;

app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`server listening on port ${port}`))