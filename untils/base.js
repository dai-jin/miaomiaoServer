const crypto = require('crypto');
var captcha = require('trek-captcha');
let setCrypto = (secret)=>{
  return crypto.createHmac('sha256', '@#$$##%@#@#@#@sds')
          .update(secret)
          .digest('hex');
}
var createVerify = (req,res)=>{
	return captcha().then((info)=>{
		req.session.verifyImg = info.token;
		return info.buffer;
	}).catch(()=>{
		return false;
	});
}
var Head ={
	baseUrl : 'http://localhost:3000/uploads/'
}
module.exports = {
	setCrypto,
	createVerify,
	Head
}