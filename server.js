const express = require('express');
const router = require('express').Router()
const path = require('path');

const app = express();
const port = 3000;


app.use('/', express.static(path.join(__dirname, '/'), {
    fallthrough: false
}));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});




