const Course = require('../models/course');
class NewsController {
    index(req, res) {
        //[GET] /news
        res.render('news');
    }
    async show(req, res) {
        // [GET] /news/:slug
        const result = await Course.find();
        res.json(result);
    }
}

module.exports = new NewsController();