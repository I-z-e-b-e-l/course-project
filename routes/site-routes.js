//Require Express, Express Router, and site-controller.js

const express = require('express');

const router = express.Router();

const siteController = require('../controllers/site-controller');

//Site Routes
router.route('/')
    .get(siteController.index)

router.route('/about')
    .get(siteController.about)

router.route('/login')
    .get(siteController.login)
    .post(siteController.login_post)

router.route('/register')
    .get(siteController.register)
    .post(siteController.register_post)
    


module.exports = router;



