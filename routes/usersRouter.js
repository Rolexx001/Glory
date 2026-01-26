const express=require("express");
const router=express.Router();
const {registerdUser,loginUser,logoutUser}=require("../controllers/authController");

router.get("/",function(req,res){
    res.send("hey");
});

router.post("/register",registerdUser);

router.post("/login",loginUser);

router.get("/logout",logoutUser);

module.exports=router;