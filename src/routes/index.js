const NewsRouter = require('./news'),
    SiteRouter = require('./site');

function route(app) {
    app.use('/news', NewsRouter);
    app.use('/', SiteRouter);
}

module.exports = route;