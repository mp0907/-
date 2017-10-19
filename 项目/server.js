var http = require("http");
var fs = require("fs");
var url1 = require("url");
http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

	fs.readFile("index.json","utf-8",function(err,data){
		if(!err){
			res.end(data)
		}
	})
}).listen(5454,function(){
	console.log("请求成功")
})