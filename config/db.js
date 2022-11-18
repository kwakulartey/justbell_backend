// import your packages
const mongoose= require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// storing our MongoDB URI in a variable
const db = process.env.DB_URL;

// connecting to our MongoDB database
exports.connectToDatabase = function(){
    mongoose.connect(db).then(()=>{console.log('Database connected successfully');
}).catch(error=>{console.log(`Couldn't connect to database:${error}`);})
}