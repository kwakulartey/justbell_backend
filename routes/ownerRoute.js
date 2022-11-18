const express = require('express');
const { readOwner, createOwner, updateOwner, deleteOwner, readAllOwners}=require('../controllers/ownerControllers.js');


const route = express.Router();


route.route('/').get(readAllOwners).post(createOwner);
route.route('/:id').get(readOwner).patch(updateOwner).delete(deleteOwner)


module.exports=route