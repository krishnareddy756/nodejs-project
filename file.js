const fs=require("fs");
const os=require("os");
console.log("1");
fs.readFile("contacts.txt","utf-8",(err,result)=>{
    console.log(result);
});
console.log("2");
//console.log(result);
console.log(os.cpus().length);

