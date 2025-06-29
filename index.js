require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const PORT = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});