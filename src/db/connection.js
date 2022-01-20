
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

    console.log("Conected to mongo")
    
);

module.exports = connection;