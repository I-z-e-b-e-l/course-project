
const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book-controller');


// app.get('/books/:id', (request, response) => {
//     response.render('pages/book');
// });

// need get post put delete for books
// book routes go here



// router.route('/')
//     .get(bookController.all)
//     .post(bookController.new)
//     .put(bookController.update)//??? - do we already have this in admin?
//     .delete(bookController.delete)







///books/
//post
//Post a new book into the database from Create Book page
//Redirect to admin-console landing page
router.route('/')
    .post(bookController.create_book_post)






// /books/:id    
// get
//Read a book based on the id
router.route('/:id')
    .get(bookController.single_book)




// /books/:id    
// update
//Update a book and put into the database from Update Book page
////Redirect to admin-console landing page

    .put(bookController.update_book)






// /books/:id    
// delete
//Delete a book from the database by clicking the delete button on Admin Console page
////Redirect to admin-console landing page

    .delete(bookController.delete_book)




module.exports = router;