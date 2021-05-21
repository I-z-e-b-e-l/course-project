//manage all the data that is entered about books on create and update pages


//will change eventually
const { request, response } = require('express');
let {comics} = require('../starter-files/data.js');
const {v4:uuid} = require ('uuid');

module.exports = {

    create_book_post: (request, response ) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, images} = request.body; 
        comics.push({_id, title, author, publisher, genre, pages, rating, synopsis, images});
        //response.redirect sends to a route, not a page so use admin-console, not admin
        console.log(comics);
        //console log comics to make sure the push worked
        response.redirect('/admin-console');
    },






    single_book: (request, response) => {
        const {id} = request.params;
        //const bookObjectResult = result of searching array for object with id that matches params
        const bookObjectResult = comics.find(book => book._id === String(id));
        console.log(bookObjectResult)
        //data from comicBook aka bookObjectResult goes to book.ejs
        response.render("pages/book", {comicBook: bookObjectResult})
    },




    update_book: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = comics.find(book => book._id === String(id));
        console.log(bookObjectResult)
        //use let - overwrite variables 
        // let { id } = request.params;
        let updatedTitle = request.body.title;
        let updatedAuthor = request.body.author;
        let updatedPublisher = request.body.publisher;
        let updatedGenre = request.body.genre;
        let updatedPages = request.body.pages;
        let updatedRating = request.body.rating;
        let updatedSynopsis = request.body.synopsis;
        let updatedImages = request.body.images;

        bookObjectResult.title = updatedTitle;
        bookObjectResult.author = updatedAuthor;
        bookObjectResult.publisher = updatedPublisher;
        bookObjectResult.genre = updatedGenre;
        bookObjectResult.pages = updatedPages;
        bookObjectResult.rating = updatedRating;
        bookObjectResult.synopsis = updatedSynopsis;
        bookObjectResult.images = updatedImages;

        console.log(bookObjectResult)
        response.redirect('/admin-console');
    },


    delete_book: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = comics.find(book => book._id === String(id));
        //find where the book is in the array (comics) using indexof() - log that location as "index" - then delete it using splice(): at position index, remove 1 item
        const index = comics.indexOf(bookObjectResult);
        comics.splice(index, 1);
        response.redirect('/admin-console');
    }

}
