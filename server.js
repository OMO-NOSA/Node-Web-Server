const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello World!</h1>'); 
    res.send({
        name: 'Nosa',
        Age: 29,
        likes: [
            'Reading',
            'Trancedental Meditation',
            'Hoeing'
        ]

    })
});

app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1>')
});

app.get('/contact', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
//
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))