const express=require("express");
const router=express.Router();
const isloggedin=require("../middlewares/isloggedin");
const productModel=require("../models/product-model");
const userModel=require("../models/user-model");

router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error,loggedin:false});
});

router.get("/shop",isloggedin,async function(req,res){
    let products =await productModel.find();
    let success=req.flash("success");
    res.render("shop",{products,success});
});
router.get("/cart",isloggedin,async function(req,res){
    let user=await userModel.findOne({email:req.user.email})
    .populate("cart");

    let bill=0;
    user.cart.forEach(function(item){
        bill+=Number(item.price)-Number(item.discount);
    });
    bill+=20; //platform fee
    res.render("cart",{user,bill});
});
router.get("/addtocart/:id",isloggedin,async function(req,res){
    let user=await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success","Product added to cart successfully");
    res.redirect("/shop");
    
});

module.exports=router;