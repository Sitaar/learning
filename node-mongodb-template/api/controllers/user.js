const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.user_signup = (req,res,next) => {
    User.findOne({email: req.body.email})
    .exec()
    .then(user=>{
        if(user){
            res.status(409).json({
                message:"Mail exists"
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash) => {
                if(err){
                    return res.status(500).json({
                        err:err
                    })
                }else{
                    const user = new User({
                        _id:new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        password:hash
                    });
                    user
                    .save()
                    .then(result=>{                       
                        res.status(201).json({
                            message:'Create user successfully' ,
                            createdUser: {
                                result: result,
                            }
                        });
                    })
                    .catch(err=>{
                        res.status(500).json({
                            error:err
                        });
                    });
                }
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};

exports.user_login = (req,res,next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user=>{
        if(user.length<1){
            res.status(401).json({
                message:"Auth Failed"
            });
        }else{
            bcrypt.compare(req.body.password,user[0].password,(err,result) => {
                if(err){
                    res.status(401).json({
                        message:"Auth Failed"
                    });
                }
                if(result){
                    const token = jwt.sign({
                        email:user[0].email,
                        userId:user[0]._id
                    },process.env.JWT_KEY,{
                        expiresIn:"1h",
                    });
                    res.status(200).json({
                        message:"Auth successfully",
                        token:token,
                        request:{
                            type: 'POST',
                            url: 'http://localhost:3000/user/signup',
                            body:{
                                email:"string",
                                password:"string"
                            }
                        }
                    });
                }else{
                    res.status(401).json({
                        message:"Auth Failed"
                    });
                }
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};

exports.user_delete = (req,res,next) => {
    const id = req.params.userId;
    User.deleteOne({_id:id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"User deleted successfully",
            request:{
                type: 'POST',
                url: 'http://localhost:3000/user/signup',
                body:{
                    email:"string",
                    password:"string"
                }
            }
        });      
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};