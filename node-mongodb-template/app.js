require("dotenv").config();

const express = require('express');;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const productsRoutes = require('./api/routers/products');
const ordersRoutes = require('./api/routers/orders');
const userRoutes = require('./api/routers/user');


mongoose.connect('mongodb+srv://db:'
+process.env.MONGO_ATLAS_PW
+'@test.gx6wc.mongodb.net/?retryWrites=true&w=majority&appName=test');

mongoose.Promise = global.Promise;

//请求耗时
//app.use(morgan('combined'));//combined [09/Aug/2024:13:17:15 +0000] "GET /orders/2 HTTP/1.1" 200 36 "-" "PostmanRuntime/7.41.0"
app.use(morgan('dev'));//dev GET /orders/2 200 3.494 ms - 36
app.use( '/uploads',express.static("uploads"))
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method === "OPTIONS"){
        req.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,PATCH,GET");
        return res.status(200).json();
    }
    next();
})

//处理请求
app.use( '/products',productsRoutes);
app.use( '/orders',ordersRoutes);
app.use( '/user',userRoutes);

app.use((req,res,next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
})

module.exports = app;