const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = 3000;

app.get('/', (request, response) => {
    response.send(`This route points to the homepage`);
})

app.get('/about', (request, response) => {
    response.send(`This route points to the About page`);
})

app.get('/login', (request, response) => {
    response.send(`This route points to the Login page`);
})

app.get('/admin-console', (request, response) => {
    response.send(`This route points to the Admin Console page`);
})

app.get('/admin-console/create-book', (request, response) => {
    response.send(`This route points to the Create page`);
})



app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
