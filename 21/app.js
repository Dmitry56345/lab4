const express = require('express');
const app = express();

// обработка запроса по адресу /about
app.get('/about', function (request, response) {
    response.send('<h1>О сайте</h1>');
});

// обработка запроса по адресу /contact
app.use('/contact', function (request, response) {
    response.send('<h1>Контакты</h1>');
});

// обработка запроса к корню веб-сайта
app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url);
});
app.listen(3000);
