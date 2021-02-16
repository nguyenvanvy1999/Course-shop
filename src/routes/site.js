const express = require('express'),
    router = express.Router(),
    SiteController = require('../app/controllers/site');

router.use('/search', SiteController.search);
router.use('/', SiteController.home);

module.exports = router;