const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello World!</h1>'); 
    res.render({
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my webpage',
        likes: [
                'Reading',
                'Trancedental Meditation',
                'Hoeing'
            ]
            //
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
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