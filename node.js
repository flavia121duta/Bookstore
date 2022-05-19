const express = require('express');
const fs = require('fs');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const formidable = require('formidable');

const dataDir = path.join(__dirname,"infoRecenzii");
const imageDir = path.join(__dirname, "imgRecenzii");

const port = 3000;

app.use(express.static(`${__dirname}/css`));
app.use(express.static(`${__dirname}/js`));
app.use(express.static(`${__dirname}/img`));
app.use(express.static(`${__dirname}/json`));
app.use(express.static(`${__dirname}/uploads`));
app.set('view engine', 'ejs');

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

app.post('/recenzii', (req, res) => {
    const formUpload = `${__dirname}/uploads`;

    const form = formidable({ uploadDir: formUpload });
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        const oldPath = files.img.filepath;
        const newPath = `${formUpload}/${files.img.originalFilename}`;
        fs.rename(oldPath, newPath, () => {
            console.log('<3');
        });

        // fs.appendFileSync(`${__dirname}/infoRecenzii.json`, `${JSON.stringify(fields)} \n`);
        let f = JSON.parse(fs.readFileSync(`${__dirname}/json/infoRecenzii.json`, 'utf-8'));
        f[Object.keys(f).length + 1] = fields;
        f[Object.keys(f).length].src = `<img class = "photo" src='${files.img.originalFilename}'`;

        fs.writeFileSync(
            `${__dirname}/json/infoRecenzii.json`,
            JSON.stringify(f)
        );
    });
    res.redirect('/afisare');
});

let infoRecenzii = JSON.parse(fs.readFileSync(`${__dirname}/json/infoRecenzii.json`))
app.get('/afisare', (req,res)=>{
    res.render('afisare', {
        infoRecenzii: infoRecenzii
    });
})

// login
app.post('/login', (req, res) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        let users = JSON.parse(
            fs.readFileSync(`${__dirname}/json/users.json`, 'utf-8')
        );

        let testUsername = fields.username;
        let arrTest = [];
        for (let i = 1; i <= Object.keys(users).length; i++) {
            arrTest.push(users[i].username);
        }
        if (arrTest.includes(testUsername)) {
            // res.render('login');
            res.send('User deja existent');
        } else {
            for (let i = 1; i <= Object.keys(users).length; i++) {
                if (users[i].username === fields.username && users[i].parola === fields.parola) {
                    res.render('ok');
                }
            }
            res.render('login');
        }
    });
});

app.get('/login', (res, req) => {
    req.render('login');
})

app.post('/register', (req, res) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        let users = JSON.parse(
            fs.readFileSync(`${__dirname}/json/users.json`, 'utf-8')
        );
        users[Object.keys(users).length + 1] = fields;

        fs.writeFileSync(
            `${__dirname}/json/users.json`,
            JSON.stringify(users)
        );
    });
    res.render('');
    res.render('login');
});

// 404
app.all('*', (req, res) => {
    res.sendFile(`${__dirname}/404.html`);
});

app.listen(port, () => {
    console.log(`Serverul a pornit la host: ${port}`);
});
