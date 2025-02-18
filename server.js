const http =require('http');

const server =http.createServer((req, res)=>{
    try{
        res.statusCode=200;
    //res.write("server running")
    res.end("server runiing...");
    } catch(error) {
        res.statusCode=403;
    } 
})

server.listen(9000,()=>{
    console.log("server runnig our page 9000");
    
});