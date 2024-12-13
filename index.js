const http=require("http");
const fs=require("fs");
const { url } = require("inspector");
const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}New Request received\n`
    if(req.url==="/favicon.ico") return res.end();
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/" :res.end("Home page");
            break;
            case "/about" :res.end("I am Krishna reddy");
            break;
            default :res.end("404 page not found");
        }
    })
});
myserver.listen(8000,()=> console.log("server started"));