const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const db = require('../db/index.js');
const apiKey = require('../weatherAPI.js');

const app = express();
const port = 4000;

app.use(morgan('dev'));

app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/:city', (req, res) => {
  const city = req.params.city;
  const q = `weather:${city}`;
  db.get(q, (err, reply) => {
    if (err) {
      res.status(500).send(`Redis Error: ${error}`)
    } else if (reply) {
      res.send(JSON.parse(reply))
    } else {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then(response => {
          const data = response.data;
          db.setex(q, 600, JSON.stringify(data))
          return res.send(data);
        })
        .catch(err => res.send(`API get error: ${err}`))
    }
  });
})

app.listen(port, () => console.log(`server listening on port ${port}`))
