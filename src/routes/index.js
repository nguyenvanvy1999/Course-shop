const NewsRouter = require('./news'),
    SiteRouter = require('./site'),
    CourseRouter = require('./course');

function route(app) {
    app.use('/course', CourseRouter);
    app.use('/news', NewsRouter);
    app.use('/', SiteRouter);
}

module.exports = route;