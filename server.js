const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;


hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/Public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    //res.send('<h1>Hello World!</h1>'); 
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my webpage',

    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        name: 'Nosa Omorodion Japhet'
    })
});
//
app.get('/contact', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
//
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))