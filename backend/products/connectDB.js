const mongoose = require("mongoose");
const username = process.env.USERDB
const password = process.env.PASSDB

mongoose.connect(`mongodb+srv://${username}:${password}@pruebas.nbnrpyy.mongodb.net/`, { useNewUrlParser: true });

mongoose.connection.on("error", (e)=>{
    console.error(e); 
});