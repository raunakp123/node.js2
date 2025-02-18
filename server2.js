const http= require ('http');
const fs=require('fs');
const filicontant=fs.readFileSync('index.html','utf-8',(err,dta)=>{
    console.log(err);
    
})
const filicontant1=fs.readFileSync('contact.html','utf-8',(err,dta)=>{
    console.log(err);
    
})

const server=http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    if(req.url==='/'){
        res.end(filicontant);

    }
    if(req.url==='/contact'){
        res.end(filicontant1);
    }

    
    
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(filicontant);
})

server.listen(8000,()=>{
    console.log("server runiing on8000");
    
})
