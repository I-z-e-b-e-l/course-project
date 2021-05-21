    //Require Express Router

    const express = require('express');
    const router = express.Router();


// In this file you will need to do the following:
    //Require admin-routes, book-routes, and site-routes - is my file path right?

    const adminRouter = require('./admin-routes.js');
    const bookRouter = require('./book-routes.js');
    const siteRouter = require('./site-routes.js');



    //Using Router, you need 3 routes. Below is the information that each routes needs:
        //PATH: '/' HANDLER: will go to site-router.js
        // local host:3000 - anything not books or admin
        router.use('/', siteRouter);

        //PATH: '/books' HANDLER: will go to book-router.js
        router.use('/books', bookRouter);

        //PATH: '/admin-console' HANDLER: will go to admin-router.js
        router.use('/admin-console', adminRouter);
    
    //Make sure to export the router using Module Export
    module.exports = router;

