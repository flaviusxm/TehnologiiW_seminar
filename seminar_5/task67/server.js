const express=require('express')
const path=require('path')
const app=express();
const port=9284;

app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'));
});

app.get('/search',(request,response)=>{
    const {cautare}=request.query;
    response.send(`Ai cautat ${cautare}`);
});

app.post('/submit',(request,response)=>{
    const {nume}=request.body;
    response.send(`Ai trimis: ${nume}`);
})

app.get('/resource/:id',(request,response)=>{
    const {id}=request.params;
    response.send(`Am gasit resursa cu ID ul ${id}`);
})

//optional
/*
app.put('/resource/:id',(request,response)=>{
    const {id}=request.params;
    const {date_primite}=request.body;
    response.send(`Resursa cu ID ${id} a fost inlocuita cu ${date_primite}`);

});
app.delete('/resource/:id',(request,response)=>{
    const {id}=request.params;
    response.send(`Resursa ${id} a fost stearsa`);
})
    */
//optional
app.listen(port,()=>{
    console.log(`Serverul ruleaza la http://localhost:${port}`);
});