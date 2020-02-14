const express = require("./like-express");

const app = express();

app.use((req, res, next) => {
    console.log(`reqeust: ${req.method} - ${req.url}`);
    next();
});

app.get('/', (req, res, next) => {
    res.json({
        msg: 'home page'
    });
});

app.use((req, res, next) => {
    res.json({
        msg: '404'
    });
});

app.listen(3000, () => {
    console.log("Listening on 3000 port ...");
});