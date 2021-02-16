const Course = require('../models/course'),
    { convertArray, convertObject } = require('../../util/mongoose');

class SiteController {
    async home(req, res, next) {
        try {
            const result = await Course.find();
            const courses = convertArray(result);
            res.render('home', { courses });
        } catch (error) {
            next(error);
        }
    }
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SiteController();