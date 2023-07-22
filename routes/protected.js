const express = require('express');
const JWT = require('../jwt');

const router = express.Router();

// curl -X POST -H "Content-Type:application/json" -d '{"email":"ryd1@gmail.com","pass":"upassryd"}' http://localhost:3000/account/login
router.post('/login',(req, res)=>{
    const user = req.body;
    if(user.email==='ryd@gmail.com' && user.pass==='upassryd'){
        const token = JWT.generateToken(user);
        return res.json({token})
    }
    else{
        return res.status(401).json({message:'Incorrect creds'});
    }
});

// curl -X GET -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ5ZEBnbWFpbC5jb20iLCJwYXNzIjoidXBhc3NyeWQiLCJpYXQiOjE2OTAwNDYyODMsImV4cCI6MTY5MDA0OTg4M30.YlRondSx5Dj0zka3EYHfvCmD0R2UV23-t_rHDJPo13o" http://localhost:3000/account/summary
router.get('/summary/',JWT.verifyToken,(req,res)=>{
    res.json({
        id:1323,
        sum:923393
    })
})

module.exports = router