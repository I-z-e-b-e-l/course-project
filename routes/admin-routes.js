//Require Express, Express Router, and site-controller.js

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin-controller');


//Inside of your app.js, you will need to identify which routes 
//Once you have identified these 3 routes in your app.js, cut those routes and paste them into site-routes.js. - what is the 3rd?

    // app.get('/admin-console', (request, response) => {
    //     response.render('pages/admin');
    // });

    // app.get('/admin-console/create-book', (request, response) => {
    //     response.render('pages/create');
    // });

    // app.get('/admin-console/update-book/:id', (request, response) => {
    //     response.render('pages/update');
    // });
    



//Make sure to update these routes to use the Express Router instead of app

//edit and delete?
//Does it matter that the admin page currently has books hardcoded? 
// is create/update even in the ejs file?


router.route('/')
    .get(adminController.admin)

router.route('/create-book')
    .get(adminController.create)
    //what else goes here 

router.route('/update-book/:id')
    .get(adminController.update)
    //what goes here?



//Also, make sure to export the router using Module Export

module.exports = router;
