const userModel=require("../models/user-model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {generateToken}=require("../utils/generateToken");
const productModel=require("../models/product-model");

module.exports.registerdUser= async function(req,res){
    try{
        let{email,password,fullname}=req.body;

        let user=await userModel.findOne({email:email});
        if(user){
            return res.status(401).send("user already registered. please login");
        }



        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(password,salt,async function (err,hash){
                if(err){
                    return res.send(err.message);
                }
                else{
                    let user=await userModel.create({
                        email,
                        password:hash,
                        fullname,
                    });
                    let token=generateToken(user);
                    res.cookie("token",token,{
                        httpOnly:true,
                        sameSite:"lax"
                    });
                    req.session.user={
                        id:user._id,
                        email:user.email,
                    }


                    res.redirect("/shop");


                }
            });

        });

    }

    catch(err){
        res.send(err.message);
    }

};

module.exports.loginUser=async function(req,res){
    try{
        let {email,password}=req.body;

        let user=await userModel.findOne({email});
        if(!user){
            req.flash("error", "Please sign up");
            return res.redirect("/");
        }
        bcrypt.compare(password,user.password,function(err,result){
            if(result){
                let token=generateToken(user);
                res.cookie("token",token,{
                    httpOnly:true,
                    sameSite:"lax"
                });
                req.session.user={
                    id:user._id,
                    email:user.email,
                }
                res.redirect("/shop");
            }
            else{
                req.flash("error","Email or Password is incorrect");
                res.redirect("/");
            }
        });
    }
    catch(err){
        res.send(err.message);
    }
};

module.exports.logoutUser=function(req,res){
    req.session.destroy(()=>{
        res.clearCookie("token");
        res.redirect("/");
    });
};