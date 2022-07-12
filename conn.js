const mongoose = require('mongoose');
const express = require('express');
const app   = express();


const DB = 'mongodb+srv://oozmakappa2234:aqjC5EvFmAirVtl2@cluster0.txgam41.mongodb.net/mernstack?retryWrites=true&w=majority'; { 
    
    mongoose.connect(DB).then(()=>{
        console.log('connected to database');
    }).catch(()=>{
        console.log('error connecting to database');
    })


    useNewUrlParser: true;
      useCreateIndex: true ;
     useUnifiedTopology: true;
     useFindAndModify: false;
}
 //}).then(() => {
   // console.log('connection successfull');

//}).catch((err) => {
  //  console.log('error in connection');
//});