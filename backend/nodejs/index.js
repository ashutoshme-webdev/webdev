import http from "http"
import fName from "./features.js"
import {bName2,bName3} from "./features.js"
import fs from "fs"

const reader = fs.readFile("./index.html",()=>{
    console.log("File read");
    
})
console.log(reader);

console.log(fName);
console.log(bName2);
console.log(bName3);



const server = http.createServer((req,res)=>{
// res.write("<h1>Hi</h1><h2>Hello</h2><p>!</p>")  
if(req.url=="/about")
res.write("<p>About</p>")
else if(req.url=="/")
res.write("<p>Home</p>")
    
})
server.listen(5000,()=>{
    
    console.log("server is working");
})