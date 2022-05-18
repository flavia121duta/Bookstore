const express = require('express');
const fs = require('fs');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
// const formidableMiddleware = require('./middlewares/formidableMiddleware');
const formidable = require('formidable');

const dataDir = path.join(__dirname,"infoRecenzii");
const imageDir = path.join(__dirname, "imgRecenzii");

const port = 3000;

app.use(express.static(`${__dirname}/css`));
app.use(express.static(`${__dirname}/js`));
app.use(express.static(`${__dirname}/img`));
app.set('view engine', 'ejs');

// app.use(formidableMiddleware());

// let urlencodedParser = bodyParser.urlencoded({ extended: false });

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

// app.post('/recenzii', formidableMiddleware(), (req, res) => {
//     console.log('love');
//     const image = req.files.img;
//     const id = Date.now();
//     const imageExt = image.originalFilename.split(".").at(-1);
//     const fileData = fs.readFileSync(image.filepath);
//     console.log(fileData);
//     fs.writeFileSync(path.join(imageDir, `${id}.${imageExt}`), fileData);
//     const foto = {
//         id,
//         titlu: req.body.titlu,
//         img: `/imgRecenzii/${id}.${imageExt}`,
//         range: req.body.numar,
//         email: req.body.adresa,
//         recomandare: req.body.recomandare,
//         data: req.body.data,
//         recenzie:req.body.recenzie
//     }
//
//     console.log(foto);
//     fs.writeFileSync(path.join(dataDir, `${id}.json`), JSON.stringify(foto));
//     res.redirect('/recenzii');
// });

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
            console.log('ly');
        });
        console.log(files.img.originalFilename);
        console.log(typeof(fields));

        fs.appendFileSync(`${__dirname}/infoRecenzii.json`, `${JSON.stringify(fields)} \n`);
    });
    res.redirect('/');
});

app.all('*', (req, res) => {
    res.sendFile(`${__dirname}/404.html`);
});


app.listen(port, () => {
    console.log(`Serverul a pornit la host: ${port}`);
});
