var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin')
router.use((req,res,next)=> {
   if(req.session.username && req.session.isAdmin){
   	  next();
   }else{
   	  res.send({
   	  	msg : "没有权限",
   	  	status : -1
   	  })
   }
})
/* GET users listing. */
router.get('/',adminController.index);

router.get('/user',adminController.userList);
router.post('/freeze',adminController.updateFreeze);
router.post('/deleteUser',adminController.deleteUser);

module.exports = router;
