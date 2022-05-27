const mongoose =require("mongoose");


// foodname,price,quantity,fullname,email,phoneno,address
const userSchema = new mongoose.Schema({
    // foodname:String,
    // price:String,
    // quantity:String,
    fullname:String,
    email:String,
    phoneno:String,
    address:String
});

module.exports = mongoose.model("foodorder", userSchema);
