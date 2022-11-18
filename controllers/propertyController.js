
const express= require('express');
const { Property } = require('../models/property.js');



//read all properties(GET REQUEST)
const readAllProperties= async (req, res)=>{
    try {
        const allPrpoerties = await Property.find({});
        return res.status(200).json({
            success:true,
            message:'All properties found successfully',
            data: allPrpoerties
        })
        
    } catch (error) {
    console.log(`oops! something went wrong:${error}`);
    res.status(400).send(`oops! something went wrong:${error}`);
        
    }
}


//read an owner (READ REQUEST)

const readProperty = async (req, res)=>{
    try {
        const Property = await Property.findById(req.body.id);
        res.status(200).json({
            success:true,
            message: 'Property found suceesfully',
            data: Property
        })
        
    } catch (error) {
        console.log(`oops! failed to get info on property: ${error}`);
        res.status(400).send (`oops! failed to get info on property: ${error}`)
        
    }
}

//create Property (POST REQUEST)
const createProperty =async(req, res)=>{
    try {
        const createdProperty =await Property.create({...req.body});
        res.status(201).json({
            sucess:true,
            message:('Property successfully created'),
            data: createdProperty

        })
        
    } catch (error) {
        console.log(`oops! failed to create info on Property: ${error}`);
        res.status(400).send (`oops! failed to create info on Property: ${error}`)

        
    }
}
//update Property (PUT/PATCH REQUEST)
const updateProperty =async(req, res)=>{
    try {
        const updatedProperty =await Property.findByIdAndUpdate(req.params.id,{...req.params.body});
        res.status(200).json({
            sucess:true,
            message:('Property successfully updated'),
            data: updatedProperty

        })
        
    } catch (error) {
        console.log(`oops! failed to update Property: ${error}`);
        res.status(400).send (`oops! failed to update Property: ${error}`)

        
    }
}

//delete Property (DELETE REQUEST)
const deleteProperty =async(req, res)=>{
    try {
        const deletedProperty =await Property.findbyIdAndDelete(req.params.id,{...req.params.body});
        res.status(200).send(`${deletedProperty.name} deleted successfully`)
    } catch (error) {
        console.log(`oops! failed to delete property: ${error}`);
        res.status(400).send (`oops! failed to delete property: ${error}`)

        
    }
}


module.exports={
    readAllProperties,
    readProperty,
    createProperty,
    updateProperty,
    deleteProperty
}