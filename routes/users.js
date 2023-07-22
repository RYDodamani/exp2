var express = require('express');
var router = express.Router();

/* GET users listing. */
// Requests - with and without optional query parameters
// http://localhost:3000/users - witout query params
// http://localhost:3000/users/?role=admin or
// http://localhost:3000/users?role=admin - with query parameters
router.get('/', function(req, res, next) {
  const queryparams = req.query;
  console.log('Query params',queryparams)
  res.send('respond with a resource');
});

// userid is route parameter
// http://localhost:3000/users/1
// http://localhost:3000/users/32
router.get('/:userid',(req,res)=>{
  console.log('Route parameter',req.params)
  res.json({name:'raj',profession:'software engineer'});
})

// Exaple requests - 
// curl -X POST -H "Content-Type:application/json" -d '{"user":"raj","pass":"dodamani"}' http://localhost:3000/users/auth
// curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d 'user=raj&pass=dodamani' http://localhost:3000/users/auth
router.post('/auth',function(req,res){
  console.log('HADERS',req.headers)
  let auth = req.body;
  console.log('BODY=',auth)
  if(auth.user==='raj' && auth.pass==='dodamani'){
    console.log("Auth Data")
    res.send("Welocme back");
  }
  else{
    console.log("No auth data")
    res.status(400).send('Incorrect creds');
  }
})

module.exports = router;
