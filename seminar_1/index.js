const express=require('express')
const path=require('path')
 const app=express()
 app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'2.html'));
 })
 app.get('/ping',(request,response)=>{
    response.send('pong');
 })
app.listen(3001, () => {
    console.log("Server up la  http://localhost:3001");
});
