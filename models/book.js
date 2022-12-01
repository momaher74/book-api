const mongoose = require('mongoose') ;  
const Author = require('./auther') ; 

const bookSchema = mongoose.Schema({
    name:{
        type : String , 
        required : true , 
    } , 
    author:Author.Schema , 
    genre:{
        type : String , 
        required : true , 
    }
},{timestamps : true}) ;

module.exports = mongoose.model('book' , bookSchema) ; 