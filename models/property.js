const mongoose = require('mongoose');

// extract schema & model from mongoose package
const {Schema, model}=mongoose;

// extract Schema & model
const propertySchema = new Schema({

    propertyOwner:{
        type:Boolean
    },
    firstName:{
        type:String,required: true,
    },
    lastName:{
        type:String,required: true,
    },
    email:{
        type:String, required: true,
    },
    number:{
        type:String,required: true,
    },
    propertyType:{
        type:String,
    },
    propertyAge:{
        type: String,required: true
    },
    furnishingStatus:{
        type:String, required:true
    },
    tiled:{type: String, required: true},
    
    electricty:{
        type: String
    },
    water:{
        type: String, required: true
    },
    roomsNumber:{
        type: String, required:true
    },
    bathroomNumber:{
        type: String, required:true
    },
    garageNumber:{
        type: String
    },
    squareFeet:{
        type: String, required:true
    },
    propertyDescription:{
        type: String, required:true
    },
    region:{
        type:String,required: true,
    },
    cityTown:{
        type: String, required:true
    },
    area:{
        type: String, required:true
    },
    digitalAddress:{
        type: String, required:true
    },
    houseNumber:{
        type: String, required:true
    },
    amount:{
        type: String, required:true
    },
    rentDuration:{
        type: String, required:true
    },
    tenantsPreferred:{
        type: String, required:true
    },
    availability:{
        type: Boolean,
        default: false
    },
    swimmingPool:{
        type: Boolean,
        default: false
    },
    clubHouse:{
        type: Boolean,
        default: false
    },
    tennisCourt:{
        type: Boolean,
        default: false
    },
    fittingFacility:{
        type: Boolean,
        default: false
    },
    parkingSpace:{
        type: Boolean,
        default: false
    },
    park:{
        type: Boolean,
        default: false
    },
    security:{
        type: Boolean,
        default: false
    },
    storage:{
        type: Boolean,
        default: false
    },

    
})
exports.Property = model('Property', propertySchema)