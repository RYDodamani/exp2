const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('Hello')
    // res.json([{post:'AI',description:'Artificial Intelligence'},{post:'Argriculture',description:'Argriculture'}])
    // res.end();
    // throw "me"
    next()
},(req,res)=>{
    res.json([{post:'AI',description:'Artificial Intelligence'},{post:'Argriculture',description:'Argriculture'}])
})

router.get('/:id',(req,res)=>{
    res.send(req.params)
})

module.exports = router;