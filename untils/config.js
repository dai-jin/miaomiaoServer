var mongoose = require('mongoose');
var nodemailer = require('nodemailer')
var Mongoose = {
	url : 'mongodb://localhost:27017/miaomiao',
	connect(){
		mongoose.connect(this.url,{ useNewUrlParser : true },(err)=>{
			if(err){
				console.log('数据库连接失败')
				return;
			}
		    console.log("数据库连接成功!")
		})
	}
}
var Email = {
	config : {
		host: "smtp.qq.com",
	    port: 587,
	    auth: {
	      user: 'new666@qq.com', 
	      pass: 'xxxxxxxx'
	    }
	},
	get transporter(){
		return nodemailer.createTransport(this.config);
	},
	get verify(){
		return Math.random().toString().substring(2,6);
	},
	get time(){
		return Date.now();
	}
};
module.exports = {
	Mongoose,
	Email
};