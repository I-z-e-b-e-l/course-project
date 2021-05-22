
// const {comics} = require('../starter-files/data.js');

const Comics = require ('../models/comic-model')

// Use Module Exports that will have a value of an object. The object will include the following:

module.exports = {

// KEY: index VALUE: handler that will show the homepage - I don't understand if I need more that was included in CW; 
// Remember that the value is coming from the handler located in site-routes.js. You are removing from site-routes.js and pasting them into. site-controller.js - I do not understand what this means
    // index: (request, response) => {
    //     response.render('pages/index', {comicBooks: comics});
    // },

    index: (request, response) => {
        Comics.find({}, (error, allComics) => {
            if (error) {
                return error;
            } else {
                console.log(allComics)
                response.render('pages/index', { comicBooks: allComics });
            }
        })
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








