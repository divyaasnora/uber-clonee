const mongoose = require('mongoose');

async function Connection(){
    try{
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("MongoDB is connected");
    }catch(error){
        console.error("Mongodb is not connected",error.message);
        process.exit(1);

    }
    

}

module.exports = Connection;