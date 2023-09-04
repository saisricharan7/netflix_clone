const router= require("express").Router();
const User = require("../models/User");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");

router.post("/register",async(req,res)=>{
   
    try{
        let encrypted_pwd= await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:encrypted_pwd,
        });
        const user=await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err)
    }
    
}); 

router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
           return res.status(401).json("User not exist");
        }
        let result=await bcrypt.compare(req.body.password,user.password);
        if(!result){
           return res.status(401).json("Wrong password!");
        }
        const accesstoken= jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn:"1d"});
        const {password,...info}=user._doc;
        res.status(200).json({...info,accesstoken})
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports= router;