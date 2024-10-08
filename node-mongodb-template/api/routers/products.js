const express = require('express');
const router= express.Router();
const multer = require('multer');

const checkAuth = require('../middleware/check-auth');

const productsController = require('../controllers/products');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString() + file.originalname)
    },
});
const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};

const upload = multer({
    storage: storage,
    limits:{
        fileSize:1024*1024*5
    },
    fileFilter: fileFilter
});

//新建一个路径后， 重新start
// const upload = multer({dest:'uploads/'})
router.get('/',productsController.get_products_all);

router.post('/',checkAuth,upload.single('productImage'),productsController.create_product);

router.get('/:productId',productsController.get_product_one);

router.patch('/:productId',checkAuth,productsController.update_product);

router.delete('/:productId',checkAuth,productsController.delete_product);


module.exports = router;