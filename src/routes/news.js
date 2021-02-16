const express = require('express'),
    router = express.Router(),
    NewsController = require('../app/controllers/news');

router.use('/:slug', NewsController.show);
router.use('/', NewsController.index);

module.exports = router;