const express = require('express'),
    router = express.Router(),
    CourseController = require('../app/controllers/course');

router.get('/:slug', CourseController.show);

module.exports = router;