const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');

exports.get_orders_all =(req,res,next) => {
    Order.find()
    .select('product quantity _id')
    .populate('product','name price')
    .exec()
    .then(docs=>{
        const response = {
            count: docs.length,
            orders:docs.map(_=> {
                return {
                    product:_.product,
                    quantity:_.quantity,
                    _id:_._id,
                    request:{
                        type: 'GET',
                        url: 'http://localhost:3000/orders/'+_._id
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

exports.create_order = (req,res,next) => {
    Product.findById(req.body.productId)
    .then(product=>{
        if(!product){
            return product;
        }
        const order = new Order({
            _id:new mongoose.Types.ObjectId(),
            product:req.body.productId,
            quantity:req.body.quantity
        });
        return order.save()       
    })
    .then(result=>{
        if(!result){
            res.status(404).json({
                message: 'Product not found'
            });
        }else{
        res.status(201).json({
            message:'Create order successfully' ,
            createdOrder: {
                result: {
                    product:result.product,
                    quantity:result.quantity,
                    _id:result._id
                },
                request:{
                    type: 'GET',
                    url: 'http://localhost:3000/orders/'+result._id
                }
            }
        });
    }
    }) 
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};

exports.get_order_one =(req,res,next) => {
    const id = req.params.orderId;
    Order.findById(id)
    .select('product quantity _id')
    .populate('product','name price')
    .exec()
    .then(doc=>{
        if(doc){
            res.status(200).json({
                result: doc,
                request:{
                    type: 'GET',
                    url: 'http://localhost:3000/orders/'
                }
            });
        }else{
            res.status(404).json({
                message:"Order with provided Id was not found"
            });
        }
        
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};

exports.delete_order = (req,res,next) => {
    const id = req.params.orderId;
    Order.deleteOne({_id:id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"Order deleted successfully",
            request:{
                type: 'POST',
                url: 'http://localhost:3000/orders/',
                body:{
                    productId:"string",
                    quantity:"Number"
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