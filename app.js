const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = 3000;


// require the Path module
const path = require('path');

//Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
//is this right?
app.use(express.static(path.join(__dirname, 'public')));


//Configure Node.js to use EJS as its views engine
app.set('view engine', 'ejs');

//Update all 5 GET routes handlers to now render EJS files as the response from the server
//routes
    // app.get('/', (request, response) => {
    //     response.send(`This route points to the homepage`);
    // })
    // app.get('/', (request, response) => {
    //     response.send(__dirname + '/views/pages/index.html');
    // });

    app.get('/', (request, response) => {
        response.render('/pages/index');
    });

    // app.get('/about', (request, response) => {
    //     response.send(`This route points to the About page`);
    // })
    // app.get('/about', (request, response) => {
    //     response.sendFile(__dirname + '/views/pages/about.html');
    // });

    app.get('/about', (request, response) => {
        response.render('/pages/about');
    });

    // app.get('/login', (request, response) => {
    //     response.send(`This route points to the Login page`);
    // })
    // app.get('/login', (request, response) => {
    //     response.sendFile(__dirname + '/views/pages/login.html');
    // });

    app.get('/login', (request, response) => {
        response.render('/pages/login');
    });

    // app.get('/admin-console', (request, response) => {
    //     response.send(`This route points to the Admin Console page`);
    // })
    // app.get('/admin-console', (request, response) => {
    //     response.sendFile(__dirname + '/views/pages/admin.html');
    // });

    app.get('/admin-console', (request, response) => {
        response.render('/pages/admin');
    });

    // app.get('/admin-console/create-book', (request, response) => {
    //     response.send(`This route points to the Create page`);
    // })
    // app.get('/admin-console/create-book', (request, response) => {
    //     response.sendFile(__dirname + '/views/pages/create.html');
    // });

    app.get('/admin-console/create-book', (request, response) => {
        response.render('/pages/create');
    });

// Create 2 GET routes with parameter with the following information:
// PATH: /books/:id, HANDLER: render a file call book that will show the books details page 
// PATH: /admin-console/update-book/:id, HANDLER: render the update comic book form page

// app.get('/books/:id', (request, response) => {
//     response.sendFile(__dirname + 'book.html');
// });

app.get('/books/:id', (request, response) => {
    response.render('/pages/book');
});

// app.get('/admin-console/update-book/:id', (request, response) => {
//     response.sendFile(__dirname + 'update.html');
// });

app.get('/admin-console/update-book/:id', (request, response) => {
    response.render('/pages/update');
});






app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
