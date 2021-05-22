
const { response } = require('express');

//{comics} will set to just the array that is in data.js
// const {comics} = require('../starter-files/data.js');

const Comics = require ('../models/comic-model')

module.exports = {
    
    // admin: (request, response) => {
    //     response.render("pages/admin", {comicBooks: comics})
    // },

    admin: (request, response) => {
        Comic.find({}, (error, allComics) => {
            if (error) {
                return error;
            } else {
                response.render("pages/admin", {comicBooks: AllComics});
            }
        })
    },

    //admin access to create page
    create: (request, response) => {
        response.render("pages/create")
    },

    //admin access to update page 
    // update: (request, response) => {
    //     const {id} = request.params;
    //     const bookObjectResult = comics.find(book => book._id === String(id));
    //     response.render("pages/update", {comicBook: bookObjectResult})
    // }

    update: (request, response) => {
        const { id } = request.params;
        Comic.findOne({_id: id}, (error, foundBook) => {
            if (error) {
                return error;
            } else {
                response.render('pages/update', { comicBook: foundBook });
            }
        })
    }


}