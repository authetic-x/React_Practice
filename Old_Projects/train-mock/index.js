const express = require('express');

const app = express();

app.get('/rest', (request, response) => {
    response.json({
        "id": '123',
        "name": "Miles"
    });
    response.status = 200;
    response.end();
});

app.listen(5000);