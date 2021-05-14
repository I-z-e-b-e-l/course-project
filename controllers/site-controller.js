// Require the data.js that is in the starter-files directory - file path right?
//this will eventually change
const data = require('../starter-files/data.js');


// Use Module Exports that will have a value of an object. The object will include the following:

module.exports = {

// KEY: index VALUE: handler that will show the homepage - I don't understand if I need more that was included in CW; 
// Remember that the value is coming from the handler located in site-routes.js. You are removing from site-routes.js and pasting them into. site-controller.js - I do not understand what this means

//May need to add additional value related to comic object
    index: (request, response) => {
        response.render('pages/index', {comicBookData: data});
    },

// KEY: about VALUE: handler that will show the about page

    about: (request, response) => {
        response.render('pages/about');
    },

// KEY: login VALUE: handler that will show the login page

    login: (request, response) => {
        response.render('pages/login');
    },

}

// Once the site-controller.js file has been completed. Make sure to update site-routes.js where the GET method is calling for the object that contains its original handler. - what?







