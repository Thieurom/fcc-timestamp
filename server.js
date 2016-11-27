'use strict'

const express = require('express');


const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});