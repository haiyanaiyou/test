Template.userItem.helpers({
	isEditing:function(){
		//从session中获取editid值 
		//session中有一个记录要编辑用户信息的id变量，把当前用户的id与session进行比较，如果相同，就是要编辑的目标
		var eid=Session.get('editid');
		var flag= this._id+''== eid;
		return flag;
	}
});
//给修改添加点击事件
Template.userItem.events({
	"click .edit" :function(e,tpl){
		e.preventDefault();
		//取得当前用户的id
		var id= this._id;
		//设置到session
		Session.set('editid',id);

	},
	"click button" :function(e,tpl){
		var name=tpl.$("#username").val();
		var age=tpl.$("#age").val();
		var id=this._id;

		// Users.insert({name:name,age:age});

		Users.update({_id:id},{name:name,age:age},function(){
			Session.set('editid',-1);
		});


	},
	"click .remove" :function(e,tpl){
		if(confirm("确定删除？")){
			var id=this._id;
			Users.remove(id);

		}

	}
});