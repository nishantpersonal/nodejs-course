const http=require('http');
const port=3000;

http.creaeSterver((request,response)=>{
    console.log("Server running");

    if(request.method=='GET'&&request.url=='/user'){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Hello World!!!!!!");

    }
    
}).listen(port);
