const express=require("express");
const router=express.Router();
const {registerdUser,loginUser,logOut}=require("../controllers/authController");

router.get("/",function(req,res){
    res.send("hey");
});

router.post("/register",registerdUser);

router.post("/login",loginUser);

module.exports=router;