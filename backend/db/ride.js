const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({

    Pickup__Location:String,
    Destination__Location:String
});

module.exports = mongoose.model("ride", userSchema);
