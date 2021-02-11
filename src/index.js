const express = require('express'),
    morgan = require('morgan'),
    handlebars = require('express-handlebars'),
    path = require('path'),
    app = express(),
    port = 8080;

app.use(morgan('dev'));

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);