/**
 * This file is here just for the example
 */

const express = require('express');
const JSONWebsiteBuilder = require('../lib');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    const html = new JSONWebsiteBuilder(require('./website.json'));
    res.send(html);
});

server.listen(port, '0.0.0.0', () => console.log(`Server is listening on http://0.0.0.0:${port}/`));
