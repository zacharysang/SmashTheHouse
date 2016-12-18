var fs = require("fs");
var express = require("express");
var localtunnel = require("localtunnel");
//var ngrok = require("ngrok");

var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = 3000;

/* Code for ngrok
var ngroktok;
fs.readFile('ngrok.txt','utf8',function(err,contents){
	if(err){
		ngroktok = "";
		}else{
		ngroktok = contents;
		}
});

ngrok.connect({addr:3000,authtoken:ngroktok},function(err,url){
	if(err){
		console.log(err);
	}else{
		console.log("running ngrok at: " + url);
	}
		});
*/


var tunnel = localtunnel(port,{'subdomain':'smashthehouse'},function(err,tunnel){
	if(err){
		console.log("Tunnel error: " + err);
	}else{
		console.log("Tunnel opened without error on port: " + port + " at: " + tunnel.url);
	}
});


router.use(function (req,res,next) {
  console.log("/" + req.method + ":" + req.originalUrl);
  next();
});

//if asking for something with an extension, it is a resource
 router.get("/*.*",function(req,res){
	 res.sendFile(path+req.originalUrl,function(err){
		 if(err){
			 console.log("error with path: " + err.path + " ("+err.status+")");
			 res.end();
			 };
	 });
 });

 /* This will be handled in the future
//if asking for something preceded by '#' then this is a section
router.get("/#*",function(req,res){
	
});
*/
 
//if asking for anything else, just a plain old page (need to add 'index.html' to get the file behind the page)
router.get("/*",function(req,res){
	console.log("get request for page received");
	//on get request for any page:
		//try to send the requested file
		res.sendFile(path + req.originalUrl + "index.html",function(err){
			if(err){
			//console.log("error: " + err);
			if(err.status == 404){
				//but catch error with 404
				res.sendFile(path + "404.html");
			}else{
				res.sendFile(path + "error.html");
			}
		}
		});
  });
  
//use router for all requests starting with '/' (all get requests)
app.use("/",router);


app.listen(port,function(){
  console.log("Live at Port " + String(port));
});