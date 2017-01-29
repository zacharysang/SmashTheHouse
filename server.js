var fs = require("fs");
var express = require("express");
var localtunnel = require("localtunnel");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var querystring = require("querystring");
var uuidV1 = require("uuid/v1");
var url = require("url");
var http = require("http");

var app = express();
var router = express.Router();

//setting global values
var path = __dirname + '/views/';
var port = 3006;
var appid = "430107553824095";
var host = '127.0.0.1:3000'
var startTime = new Date();

//set up localtunnel 
/*
var tunnel = localtunnel(port,{'subdomain':'smashthehouse'},function(err,tunnel){
	if(err){
		console.log("Tunnel error: " + err);
	}else{
		console.log("Tunnel opened without error on port: " + port + " at: " + tunnel.url);
	}
});
*/

//set up session initialization for each client
app.use(cookieParser("h,U']=wSI3\"iURoF&ex/TO7B\"V4xo2"));
app.use(session({
	name: "mysess",
	secret: "h,U']=wSI3\"iURoF&ex/TO7B\"V4xo2",
	cookie: {rolling:false,
			secure:false,
			httpOnly: false,
			domain:host},
	saveUninitialized: false,
	resave: true
}));


//on each request:
router.use(function (req,res,next) {
	res.header("Access-Control-Allow-Origin", host);
	//print the request url
	console.log("/" + req.method + ":" + req.originalUrl);

	//set the FBlogin parameter if not already set
	//if(req.session.FBlogin != "logged_in"){
	//	console.log("setting session to not_logged_in");
	//	req.session.FBlogin = "not_logged_in";
	//}
	//print login status
	//console.log("session: %j", req.session);
	console.log("sessionId: " + req.session.id);
	console.log("FBlogin: " + req.session.FBlogin);
	//call next routing function
	next();
});

//response to request for root
router.get("/",function(req,res){
	//parse any arguments in the request
	queryObj = url.parse(req.originalUrl,true).query;

	//check if a query was made, if not just send index.html, else set up authentication
	if(queryObj.code){	
	
		//given code exchange for token from FB endpoint to authenticate
		http.get({
			host:"graph.facebook.com",
			path:"/v2.8/oauth/access_token",
			client_id: appid,
			redirect_uri: host + "/",
			client_secret: "6036df3e78ac6b607686753d66f09272",
			code: queryObj.code
			},function(msg){
				console.log("message: %j", msg.access_token);
				if(true){
				req.session.access_token = msg.access_token;
				req.session.FBlogin = "logged_in";
				req.session.test = "tested";
				
				console.log("logged in...session: %j",req.session);
				}else{
					console.log("something went wrong in code response");
					}
			});
		
		//redirect to login or not depending on if authentication was successful
		if(req.session.FBlogin == "logged_in"){
			res.sendFile(path + "home/index.html",function(err){
				if(err){
					if(err.status == 404){
						//but catch error with 404
						res.sendFile(path + "other-html/404.html");
					}else{
						res.sendFile(path + "other-html/error.html");
					}
				}
			})
		}else{
			res.sendFile(path + "index.html",function(err){
				if(err){
					if(err.status == 404){
						//but catch error with 404
						res.sendFile(path + "other-html/404.html");
					}else{
						res.sendFile(path + "other-html/error.html");
					}
				}
			});
			}
	}else{
		//try to send the requested file
		res.sendFile(path + "index.html",function(err){
				if(err){
					if(err.status == 404){
						//but catch error with 404
						res.sendFile(path + "other-html/404.html");
					}else{
						res.sendFile(path + "other-html/error.html");
					}
				}
			});
		}
  });

  
//if requesting something with a file extension, it is a resource
//if from js or css folder, let it go without authentication
 router.get("((/js)|(/css)|(/other-html))*.*",function(req,res){
	 res.sendFile(path+req.originalUrl,function(err){
		 if(err){
			 console.log("error with path: " + err.path + " ("+err.status+")");
			 res.end();
			 };
	 });
 });

//if asking for any main page, authenticate and add 'index.html' to get the file behind the page
router.get("/*/",function(req,res){
	if(req.session.FBlogin == "logged_in"){
		//on get request for any page:
		//try to send the requested file
			res.sendFile(path + req.originalUrl + "index.html",function(err){
				if(err){
					if(err.status == 404){
						//but catch error with 404
						res.sendFile(path + "other-html/404.html");
					}else{
						res.sendFile(path + "other-html/error.html");
					}
				}
			});
	}else{
		res.sendFile(path + "other-html/noauth.html");
	}
  });


  
/* This will be handled in the future
//if asking for something preceded by '#' then this is a section
router.get("/#*",function(req,res){
	
});
*/

//use router for all requests starting with '/' (all get requests)
app.use("/",router);

app.listen(port,function(){
  console.log("Live at Port " + String(port) + ". Waiting for tunnel...");
});