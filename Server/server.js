const express = require('express');
const app = require('express')();// Low level communication helper like protocol
const http = require('http').Server(app);// Our Web Server
const path = require('path');

// Server for local test
// Yerel sunucu...

//Ana doğrultudaki dosyalar ve css

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../') });
})
app.get('/css/style.css', function (req, res) {
  res.sendFile('style.css', { root: path.join(__dirname, '../css') });
})
app.get('/AtakanAtes', function (req, res) {
    res.sendFile('AtakanAtes.html', { root: path.join(__dirname, '../') });
})
app.get('/404', function (req, res) {
  res.sendFile('404.html', { root: path.join(__dirname, '../') });
})

// 'Dizin' içerisindeki 'Dosya' -> // '/Dizin/Dosya'
app.get('/Content/Games', function (req, res) {
  res.sendFile('Games.html', { root: path.join(__dirname, '../Content/') });
})
app.get('/Content/Artworks', function (req, res) {
  res.sendFile('Artworks.html', { root: path.join(__dirname, '../Content/') });
})

app.get('/Content/Games/Metalash', function (req, res) {
  res.sendFile('Metalash.html', { root: path.join(__dirname, '../Content/Games/') });
})
app.get('/Content/Games/KIVIL', function (req, res) {
  res.sendFile('KIVIL.html', { root: path.join(__dirname, '../Content/Games/') });
})


// Resimleri uzantıları ile birlikte paylaş...
app.get('/img/Instagram_Logo.png', function (req, res) {
  res.sendFile('Instagram_Logo.png', { root: path.join(__dirname, '../img') });
})
app.get('/img/Twitter_Logo.png', function (req, res) {
  res.sendFile('Twitter_Logo.png', { root: path.join(__dirname, '../img') });
})
app.get('/img/DragonRenderHighPoly.png', function (req, res) {
  res.sendFile('DragonRenderHighPoly.png', { root: path.join(__dirname, '../img') });
})
app.get('/img/RockyFountain.jpg', function (req, res) {
  res.sendFile('RockyFountain.jpg', { root: path.join(__dirname, '../img') });
})
app.get('/img/DragonRender.png', function (req, res) {
  res.sendFile('DragonRender.png', { root: path.join(__dirname, '../img') });
})
app.get('/img/FaviconPixel.png', function (req, res) {
  res.sendFile('FaviconPixel.png', { root: path.join(__dirname, '../img') });
})
app.get('/img/MetaLash.jpeg', function (req, res) {
  res.sendFile('MetaLash.jpeg', { root: path.join(__dirname, '../img') });
})
app.get('/img/TheElderBloodFireWebSite.jpg', function (req, res) {
  res.sendFile('TheElderBloodFireWebSite.jpg', { root: path.join(__dirname, '../img') });
})
app.get('/img/Background.jpg', function (req, res) {
  res.sendFile('Background.jpg', { root: path.join(__dirname, '../img') });
})
app.get('/img/ParticleScene.jpg', function (req, res) {
  res.sendFile('ParticleScene.jpg', { root: path.join(__dirname, '../img') });
})

app.get('/img/Circler.gif', function (req, res) {
  res.sendFile('Circler.gif', { root: path.join(__dirname, '../img') });
})



// Yordamları uzantıları ile birlikte paylaş...
app.get('/js/i18ner.js', function (req, res) {
  res.sendFile('i18ner.js', { root: path.join(__dirname, '../js') });
})

// Çeviriler
app.get('/i18n/en/general.json', function (req, res) {
  res.sendFile('general.json', { root: path.join(__dirname, '../i18n/en') });
})
app.get('/i18n/tr/general.json', function (req, res) {
  res.sendFile('general.json', { root: path.join(__dirname, '../i18n/tr') });
})

// Üçüncül İçerikler
app.get('/ThirdParty/i18n.min.js', function (req, res) {
  res.sendFile('i18n.min.js', { root: path.join(__dirname, '../ThirdParty') });
})

// app.use(express.static(path.join(__dirname, '../')));
// console.log(path.join(__dirname, '../'));


http.listen(process.env.PORT || 8520, function () {
  console.log('listening on localhost:8520');
})
