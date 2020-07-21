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

app.get('/Portfolio', (req, res) => {
    res.json(portfolio);
});

app.get('/Contact', (req, res) => {
    res.json(contact);
})

app.get('/' , (req, res) => {
     res.send("it's working");
})


app.listen(port, () => {
    console.log(`Server on ; ${port}`);
});