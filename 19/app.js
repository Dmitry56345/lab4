const express = require('express');
const app = express();

app.use('/home/foo/bar', function (request, response) {
    response.sendStatus(404);
});

app.listen(3000);
