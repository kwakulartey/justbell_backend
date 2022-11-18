// calling your installed packages
const express = require('express');
const dotenv =require('dotenv');
const {connectToDatabase}= require('./config/db.js')
const ownerRoute =require('./routes/ownerRoute.js');
const propertyRoute=require('./routes/propertyRoute.js')
const cors =require('cors')
dotenv.config();
// intanciating your package
const app = express()
app.use(cors())
app.use(express.json());
app.use('/owner',ownerRoute);
app.use('/property',propertyRoute)




// port declaration
const port = process.env.PORT||3000
// From the database
connectToDatabase();

app.get('/', function (req, res) {
  res.send('Hello world but')
})
// making your app listen through your port
app.listen(port,() => {
    console.log(`Server is running on port ${port}`) 
  } )