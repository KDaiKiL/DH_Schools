const express = require('express');
const app = express();
const escolaRouter = require('./routes/escolaRouter')
const db = require('./models/index')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(escolaRouter)


app.listen(3000, () => console.log('server rodando'))