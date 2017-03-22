Template.users.helpers({
	users:function(){
		// return Users.find(); 
		var clt=null;
		clt=Users.find();//所有记录
		//条件查询 查询name值是as
		// clt=Users.find({name:"as"});     
		    
		//  //查询符合条件的第一条记录
		//  clt=Users.findOne({name:"as"});    
		//  console.log(clt); 

		//  //模糊查询 like
		//  //查询name值是以De开头的
		//  clt=Users.find({name:/^De/});
		//  console.log(clt);


		 return clt;                          
	}
});