//may need to eventually change
const { response } = require('express');
const data = require('../starter-files/data.js');


module.exports = {
    //may need to change in the future
    admin: (request, response) => {
        response.render("pages/admin", {comicBook: bookObjectResult})
    },

    //admin access to create page

    create: (request, response) => {
        response.render("pages/create")
    },

    //admin access to update  page - add stuff to use uuids
    update: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = data.find(book => book._id === String(id));
        response.render("pages/update", {comicBook: bookObjectResult})
    }


}