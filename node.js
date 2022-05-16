const express = require('express');
const fs = require('fs');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const port = 3000;

app.use(express.static(`${__dirname}/css`));
app.use(express.static(`${__dirname}/js`));
app.use(express.static(`${__dirname}/img`));
app.set('view engine', 'ejs');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

// index
app.get('/?', (req, res) => {
    res.render('index');
});
// galerie
app.get('/galerie', (req, res) => {
    res.render('galerie');
});
//recenzii
app.get('/recenzii', (req, res) => {
    res.render('recenzii');
});

app.post('/recenzii', urlencodedParser,(req, res) => {
    fs.appendFileSync(`${__dirname}/infoRecenzii.json`, `${JSON.stringify(req.body)}\n`);
    res.redirect('/recenzii');
});

app.all('*', (req, res) => {
    res.sendFile(`${__dirname}/404.html`);
});


app.listen(port, () => {
    console.log(`Serverul ruleaza la portul: ${port}`);
});
