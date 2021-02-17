const Course = require('../models/course'),
    { convertArray, convertObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /course/:slug
    async show(req, res, next) {
        try {
            const result = await Course.findOne({ slug: req.params.slug });
            res.render('courses/show', { course: convertObject(result) });
        } catch (error) {
            next(error);
        }
    }
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new CourseController();