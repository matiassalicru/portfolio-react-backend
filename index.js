const express = require('express');
const cors = require ('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require('./JSON/About.json');
const portfolio = require('./JSON/Portfolio.json');
const contact = require('./JSON/Contact.json');

app.get('/about', (req, res) =>{
    res.json(about);
});

app.get('/portfolio', (req, res) => {
    res.json(portfolio);
});

app.get('/contact', (req, res) => {
    res.json(contact);
})

app.get('/' , (req, res) => {
     res.send("it's working");
})


app.listen(port, () => {
    console.log(`Server on ; ${port}`);
});