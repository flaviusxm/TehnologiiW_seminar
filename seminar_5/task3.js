const express=require('express');
const app=express();
const port_server=21323;
const list_resursa=[{id:1,name:'Resursa-Test',type:"Document"}];

app.get('/get-resource/:id',(request,response)=>{
    const id=parseInt(request.params.id);
    const resursa=list_resursa.find(r=>r.id===id);
    if(resursa){
        response.json(resursa);
    }else{
        response.status(404).json({error:"Not found"});
    }
})
app.listen(port_server,()=>{
    console.log(`Serverul ruleaza la http://localhost:${port_server}`);
})