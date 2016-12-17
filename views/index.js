FB.getLoginStatus(function(res){
	if(res.status == 'connected'){
		console.log('logged in!');
	}else{
		console.log('logging in');
		FB.login();
	}
});