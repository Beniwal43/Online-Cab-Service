const express = require("express");
const cors = require("cors");
require("./db/config");
const User= require("./db/user");
const Ride = require("./db/ride");
const Foodorder= require("./db/order");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(req.body)
})

app.post("/ridelocation", async (req,resp)=>{
    let ride = new Ride(req.body);
    let result1 = await ride.save();
    resp.send(req.body)
})

app.post("/order", async (req,resp)=>{
    let foodorder = new Foodorder(req.body);
    let result = await foodorder.save();
    resp.send(req.body)
})

app.listen(5000);
