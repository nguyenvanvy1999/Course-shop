class NewsController {
    index(req, res) {
        //[GET] /news
        res.render('news');
    }
    async show(req, res) {
        // [GET] /news/:slug
    }
}

module.exports = new NewsController();