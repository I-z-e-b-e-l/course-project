//Require Express, Express Router, and site-controller.js

const express = require('express');

const router = express.Router();

const siteController = require('../controllers/site-controller');


//Inside of your app.js, you will need to identify which routes will load the homepage, about page, and login page. 
//Once you have identified these 3 routes in your app.js, cut those routes and paste them into site-routes.js.

    // app.get('/', (request, response) => {
    //     response.render('pages/index');
    // });

    // app.get('/about', (request, response) => {
    //     response.render('pages/about');
    // });
   

    // app.get('/login', (request, response) => {
    //     response.render('pages/login');
    // });

//Make sure to update these routes to use the Express Router instead of app

//Site Routes
router.route('/')
    .get(siteController.index)

router.route('/about')
    .get(siteController.about)

router.route('/login')
    .get(siteController.login)







//Also, make sure to export the router using Module Export

module.exports = router;



