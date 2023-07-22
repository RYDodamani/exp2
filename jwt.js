const JWT = require('jsonwebtoken');

const secretKey = "qwerty96";
function generateToken(payload){
    return JWT.sign(payload, secretKey,{expiresIn:'1h'});
}

// Middleware to verify the jwt
function verifyToken(req, res, next){
    // console.log(req.headers)
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({message:'Access Denied. Token missing'});
    }

    JWT.verify(token, secretKey, (err, decoded)=>{
        if(err){
            return res.status(403).json({message:'Invalid Token'});
        }
        req.user = decoded;
        next()
    })
}

module.exports = {
    generateToken,
    verifyToken
}