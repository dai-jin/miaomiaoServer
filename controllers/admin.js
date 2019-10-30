var UserModel = require('../models/users')
var index = async (req,res,next) => {
   res.send({
   	 msg :"管理员权限",
   	 status :0
   })
}
var userList = async(req,res,next) =>{
	var result = await UserModel.userList()
	if(result){
		res.send({
			msg : '获取当前用户信息',
			status : 0,
			data : {
				userList : result
			}
		})
	}
}
var updateFreeze = async(req,res,next) =>{
	var { email, isFreeze } = req.body
	var result = await UserModel.updateFreeze(email,isFreeze)
	if(result){
		res.send({
			msg : '冻结成功',
			status : 0
		})
	}else{
		res.send({
			msg : '冻结失败',
			status : -1
		})
	}
}
var deleteUser = async(req,res,next)=>{
	let { email } = req.body
	let result = await UserModel.deleteUser(email)
	if(result){
		res.send({
			msg : '删除成功11111',
			status : 0
		})
	}else{
		res.send({
			msg : '删除失败',
			status : 0
		})
	}
}
module.exports = {
	index,
	userList,
	updateFreeze,
	deleteUser
}