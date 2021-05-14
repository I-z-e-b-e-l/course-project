//manage all the data that is entered about books on create and update pages


//will change eventually
const { request, response } = require('express');
let data = require('../starter-files/data.js');
const {v4:uuid} = require ('uuid');

module.exports = {

    single_book: (request, response) => {
        const {id} = request.params;
        //const bookObjectResult = result of searching array for object with id that matches params
        const bookObjectResult = data.find(book => book._id === String(id));
        //do we also need to set variables for the items that are within bookObjectResult?

        //should this be response.send instead?
        response.render("pages/book", {bookObject: bookObjectResult})
    },

    //Do we separate here for getting the create page (I thought that lived under admin?) and posting the information? on admin controller we have: 
    // create: (request, response) => {
    //     response.render("pages/create")
    // },


    create_book_post: (request, response ) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, images} = request.body; 
        // const newBookTitle = request.body.title;

    },



    //similar here, do we have separate things happening when we get the data to update, and when we put
    update_book: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = data.find(book => book._id === String(id));
        //something
        response.redirect('/books');
    },




    delete_book: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = data.find(book => book._id === String(id));
        //something
        response.redirect('/books');
    }



}
