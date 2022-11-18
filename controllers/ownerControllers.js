
const express= require('express');

const {Owner}= require('../models/owner.js');



//read all owners(GET REQUEST)
const readAllOwners= async (req, res)=>{
    try {
        const allOwners = await Owner.find({});
        return res.status(200).json({
            success:true,
            message:'All owners found successfully',
            data: allOwners
        })
        
    } catch (error) {
    console.log(`oops! something went wrong:${error}`);
    res.status(400).send(`oops! something went wrong:${error}`);
        
    }
}


//read an owner (READ REQUEST)

const readOwner = async (req, res)=>{
    try {
        const Owner = await Owner.findById(req.body.id);
        res.status(200).json({
            success:true,
            message: 'Owner found suceesfully',
            data: Owner
        })
        
    } catch (error) {
        console.log(`oops! failed to get info on owner: ${error}`);
        res.status(400).send (`oops! failed to get info on owner: ${error}`)
        
    }
}

//create Owner (POST REQUEST)
const createOwner =async(req, res)=>{
    try {
        const createdOwner =await Owner.create({...req.body});
        res.status(201).json({
            sucess:true,
            message:('Owner successfully created'),
            data: createdOwner

        })
        
    } catch (error) {
        console.log(`oops! failed to create info on Owner: ${error}`);
        res.status(400).send (`oops! failed to create info on Owner: ${error}`)

        
    }
}
//update Owner (PUT/PATCH REQUEST)
const updateOwner =async(req, res)=>{
    try {
        const updatedOwner =await Owner.findByIdAndUpdate(req.params.id,{...req.params.body});
        res.status(200).json({
            sucess:true,
            message:('Record successfully updated'),
            data: updatedOwner

        })
        
    } catch (error) {
        console.log(`oops! failed to update person: ${error}`);
        res.status(400).send (`oops! failed to update person: ${error}`)

        
    }
}

//delete Owner (DELETE REQUEST)
const deleteOwner =async(req, res)=>{
    try {
        const deletedOwner =await Owner.findbyIdAndDelete(req.params.id,{...req.params.body});
        res.status(200).send(`${deletedOwner.name} deleted successfully`)
    } catch (error) {
        console.log(`oops! failed to delete person: ${error}`);
        res.status(400).send (`oops! failed to delete person: ${error}`)

        
    }
}


module.exports={
    readAllOwners,
    readOwner,
    createOwner,
    updateOwner,
    deleteOwner
}

