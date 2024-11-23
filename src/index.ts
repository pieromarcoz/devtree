const express = require('express');
const path = require("node:path");
const app = express();
const port = 3002;


// Routing
app.get('/', (req, res) => {
    res.send('Hello World desde index.js');
});

app.listen(port, () => {
    console.log('Server started on port:', port);
});