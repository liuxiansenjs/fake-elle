const express = require('express');
const url = require('url');
const gc = require('./controller/gc.js');


const app = express();

app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');
app.set('views', './public/views');
app.set('view cache', true);

app.get('/', gc.render_HomePage);

app.listen(process.env.PORT|| 3000);