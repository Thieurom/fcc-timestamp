'use strict'

const express = require('express');
const ts = require('./timestamp.js');
const utils = require('./utils.js');


const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './'});
});

app.get('/:param', (req, res) => {
    let unix = null,
        natural = null;

    let param = req.params.param;

    // If client queries by timestamp
    if (utils.isPositiveIntegerString(param)) {
        // Limit how big timestamp is
        if (parseInt(param) < 1000000000000) {
            unix = parseInt(param);
            natural = ts.secondsToUTCFullDate(unix);
        }

    // If client queries by date string
    } else if (ts.isValidDateString(param)) {
        unix = ts.dateStringToUTCSeconds(param);
        natural = ts.secondsToUTCFullDate(unix);
    }

    res.json({unix, natural});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});