//express server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./Routes/routes')
var bodyparser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false })





app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')))//load css
app.use("/routes", routes);
app.use(bodyparser.urlencoded({ extended: true }))





mongoose.connect(process.env.DATABASE_CONNECTION)
  .then(() => console.log('Connected!'));



  app.get('/', (req,res)=>{
    res.redirect('/routes')
})




app.listen(port, (req,res)=>{
    console.log(`app open on port ${port}`)
})


