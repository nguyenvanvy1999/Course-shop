const express = require('express'),
    router = express.Router(),
    NewsController = require('../app/controllers/news');

router.get('/:slug', NewsController.show);
router.get('/', NewsController.index);

module.exports = router;