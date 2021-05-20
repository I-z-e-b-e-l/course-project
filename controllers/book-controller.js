//manage all the data that is entered about books on create and update pages


//will change eventually
const { request, response } = require('express');
let data = require('../starter-files/data.js');
const {v4:uuid} = require ('uuid');

module.exports = {

    create_book_post: (request, response ) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, images} = request.body; 
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis, images});
        response.redirect('/admin');
    },






    single_book: (request, response) => {
        const {id} = request.params;
        //const bookObjectResult = result of searching array for object with id that matches params
        const bookObjectResult = data.find(book => book._id === String(id));

        //data from comicBook aka bookObjectResult goes to book.ejs
        response.render("pages/book", {comicBook: bookObjectResult})
    },




    update_book: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = data.find(book => book._id === String(id));
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

        response.redirect('/admin');
    },


    delete_book: (request, response) => {
        const {id} = request.params;
        const bookObjectResult = data.find(book => book._id === String(id));
        //find where the book is in the array (data.js) - then delete it
        const index = data.indexOf(bookObjectResult);
        data.splice(index, 1);
        response.redirect('/admin');
    }

}
