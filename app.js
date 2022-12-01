
const mongoose = require('mongoose') ; 
const express = require('express') ;
const multer = require('multer') ;
require('dotenv').config();
const app = express() ; 

app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;

mongoose.connect(process.env.MONGO_URL)
.then(val=>{
    console.log("CCCCCCCCCCCCC");
    app.listen(3000);
}) 
.catch(error=>{console.log(error)}) ; 
