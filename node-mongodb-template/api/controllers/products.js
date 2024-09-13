const mongoose = require('mongoose');
const Product = require('../models/product');

exports.get_products_all = (req,res,next) => {
    Product.find()
    .select('name price _id productImage')
    .exec()
    .then(docs=>{
        const response = {
            count: docs.length,
            products:docs.map(_=> {
                return {
                    name:_.name,
                    price:_.price,
                    productImage:_.productImage,
                    _id:_._id,
                    request:{
                        type: 'GET',
                        url: 'http://localhost:3000/products/'+_._id
                    }
                }
            })
        };
        res.status(200).json(response);        
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });


};

exports.create_product = (req,res,next) => {
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price,
        productImage:req.file.path
    });
    product
        .save()
        .then(result=>{
            res.status(201).json({
                message:'Create product successfully' ,
                createdProduct: {
                    result: result,
                    request:{
                        type: 'GET',
                        url: 'http://localhost:3000/products/'+result._id
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

exports.get_product_one = (req,res,next) => {
    const id = req.params.productId;
    Product.findById(id)
    .select('name price _id productImage')
    .exec()
    .then(doc=>{
        if(doc){
            res.status(200).json({
                result: doc,
                request:{
                    type: 'GET',
                    url: 'http://localhost:3000/products/'
                }
            });
        }else{
            res.status(404).json({
                message:"Product with provided Id was not found"
            });
        }
        
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });

    
};

exports.update_product = (req,res,next) => {
    const id = req.params.productId;
    const updateOpts = {};
    for(const opt of req.body){
        updateOpts[opt.propName] = opt.value;
    }
    Product.updateOne({_id:id},{$set:updateOpts})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"Product updated successfully",
            request:{
                type: 'GET',
                url: 'http://localhost:3000/products/'+id
            }
        });      
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};

exports.delete_product = (req,res,next) => {
    const id = req.params.productId;
    Product.deleteOne({_id:id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"Product deleted successfully",
            request:{
                type: 'POST',
                url: 'http://localhost:3000/products/',
                body:{
                    name:"string",
                    price:"Number"
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