const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = 3000;

app.get('/', (request, response) => {
    response.send(`This route points to the homepage`);
})







app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
