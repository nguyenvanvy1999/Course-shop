const express = require('express'),
    router = express.Router(),
    SiteController = require('../app/controllers/site');

router.get('/search', SiteController.search);
router.get('/', SiteController.home);

module.exports = router;