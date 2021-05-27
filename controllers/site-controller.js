const Comics = require ('../models/comic-model')
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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


    register: (request, response) => {
        response.render('pages/register')
    },

    // register_post:(request, response) => {
    //     bcrypt.hash(request.body.password, saltRounds, function(error, hash) {
    //       const newUser = new User({
    //         username: request.body.username,
    //         password: hash
    //       })
    //       newUser.save();
    //       response.redirect('/login');
    //   });
    //   },

    register_post:(request, response) => {
        bcrypt.hash(request.body.password, saltRounds, function(error, hash) {
          const newUser = new User({
            username: request.body.username,
            password: hash
          })
          newUser.save();
          console.log(`The hash value being saved is: ${hash}`)
          response.redirect('/login');
      });
    },

    //   login_post: (request, response) => {
    //     const username = request.body.username;
    //     const password = request.body.password;
    //     User.findOne({username: username}, (error, foundUser) => {
    //       if (error) {
    //       } else {
    //         if(foundUser) {
    //             console.log(`Username was matched: ${foundUser.username}`);  
    //           bcrypt.compare(password, foundUser.password, function(error, result) {
    //           if (result === true) {
    //             console.log(`user ${foundUser.username} logged in`);
    //             response.redirect('/admin-console');              
    //             }
    //         }); 
    //         };
    //     };
    // });
    // }

    login_post: (request, response) => {
        const username = request.body.username;
        const password = request.body.password;
        console.log(`password entered is: ${password}`);
        User.findOne({username: username}, (error, foundUser) => {
          if (error) {
            console.log(`The error at login is: ${error}`);
          } else {
            if(foundUser) {
              console.log(`Username was matched: ${foundUser.username}`);
              console.log(`Their password is: ${foundUser.password}`);
  
              bcrypt.compare(password, foundUser.password, function(error, result) {
              // result == true
              if (result === true) {
                console.log(`user ${foundUser.username} logged in`);
                response.redirect('/admin-console');              
              }
            }); 
            };
          };
       });
      }


}







