var db = firebase.database();

$(document).ready(function(){
	db.ref("users/").once("value", function(snap){
		var users = snap.val();
		var keyArr = Object.keys(users);
		$("#signUp-form").submit(function(e){
			e.preventDefault();
			var email = $("#signUp-email").val();
			var pass = $("#signUp-password").val();
			for (var i = 0; i < keyArr.length; i++){
				if (email != users[keyArr[i]].email){
					db.ref("users/").push({
						email: email,
						password: pass
					});
				}
			}
		})
		$("#logIn-form").submit(function(){
			var email = $("#logIn-email").val();
			var pass = $("#logIn-password").val();
			
			for (var i = 0; i < keyArr.length; i++){
				if (email == users[keyArr[i]].email && pass == users[keyArr[i]].password){
					document.cookie = keyArr[i];
					console.log(document.cookie);
				}
			}
		}
	})
});