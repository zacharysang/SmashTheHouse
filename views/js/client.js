$(document).ready(function(){
	$(".include").each(function(){
		console.log("loading include");
		console.log("url: " + $(this).attr("src"));
		$(this).load($(this).attr("src"));
	})
	
	console.log("includes included");
});

//menu button toggling
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


//facebook sdk
	console.log("initializing fb sdk");
	
	//this actually loads the SDK
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=430107553824095";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	console.log("fb sdk initialized");
	
	//this function is called after the SDK is loaded
	window.fbAsyncInit = function() {
		//registers with smashthehouse facebook app
		FB.init({
			appId      : '430107553824095',
			xfbml      : false,
			version    : 'v2.8',
			status	   : true
		});
		
	};