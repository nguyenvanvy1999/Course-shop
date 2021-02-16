class NewsController {
    index(req, res) {
        //[GET] /news
        res.render('news');
    }
    show(req, res) {
        // [GET] /news/:slug
        res.send('hello');
    }
}

module.exports = new NewsController();