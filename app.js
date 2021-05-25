require('dotenv').config()

const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;

const methodOverride = require('method-override');

require('./config/connection');

// require the Path module
const path = require('path');

//Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
//is this right?
app.use(express.static(path.join(__dirname, 'public')));


//Configure Node.js to use EJS as its views engine
app.set('view engine', 'ejs');




app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Require the index-routes.js file
// Add the app.use() method that contains the following: PATH: '/' HANDLER: will go to index-router.js

//may need to remove-routes if things explode
const routes = require('./routes/index-routes');

app.use("/", routes);




app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
