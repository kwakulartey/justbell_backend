const express = require('express');
const { readProperty, createProperty, updateProperty, deleteProperty, readAllProperties}=require('../controllers/propertyController.js');


const route = express.Router();


route.route('/').get(readAllProperties).post(createProperty);
route.route('/:id').get(readProperty).patch(updateProperty).delete(deleteProperty)


module.exports=route