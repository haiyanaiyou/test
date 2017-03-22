Template.insertForm.events({
	"click button":function(event,template){
		var username=$("#username").val();
		var age=$("#age").val();
		var user_json={name:username,age:age};
		Users.insert(user_json);

	}
});