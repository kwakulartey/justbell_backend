const mongoose = require('mongoose');

// extract schema & model from mongoose package
const {Schema, model}=mongoose;

// extract Schema & model
const ownerSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required: true,
    },
    digitalAddress:{
        type:String,
        required: true,
    },
    region:{
        type:String,
        required: true,
    },
    
})

exports.Owner = model('Owner', ownerSchema)