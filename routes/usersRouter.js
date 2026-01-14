const express=require("express");
const router=express.Router();

router.get("/",function(req,req){
    res.send("hey");
})

module.exports=router;