const express=require('express')
const Carte=require('./Carte')
const status_router=require('./RouterStatus')
const app=express()

const lista_carti = [
    new Carte(1, 'Enigma Otiliei', 'George Calinescu','Roman'),
    new Carte(2, 'Ion', 'Liviu Rebreanu', 'Roman'),
    new Carte(3, 'Morometii', 'Marin Preda','Roman'),
    new Carte(4, 'Patul lui Procust', 'Camil Petrescu','Roman'),
    new Carte(5, 'Ultima noapte de dragoste, intaia noapte de razboi', 'Camil Petrescu','Roman'),
    new Carte(6, 'Cel mai iubit dintre pamanteni', 'Marin Preda','Roman'),
    new Carte(7, 'Baltagul', 'Mihail Sadoveanu','Roman'),
]
let cnt=8;
function sortare_carti_dupa_titlu(){
    return [...lista_carti].sort((a,b)=> a.titlu.localeCompare(b.titlu))
}
app.use(express.json());
app.use('/status', status_router);
app.get('/carti',(req,resp)=>{
    resp.json(sortare_carti_dupa_titlu());
})
app.use((req,resp,next)=>{
    const timestamp=new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next();
})
app.get('/eroare-st',(req,resp,next)=>{
    const error=new Error('Eroare stack')
    error.status=500
    next(error)
});
app.post('/carti',(req,resp)=>{
    const {titlu,autor}=req.body;
    if(!titlu || titlu.trim()===''){
        return resp.status(400).json({error:'Titlul lipseste'});
    }
    if(!autor || autor.trim()===''){
        return resp.status(400).json({error:'Autorul lipseste'});
    }
    if(typeof titlu!=='string' || typeof autor!=='string'){
        return resp.status(400).json({error:'Titlu + Autor = > text'});
    } 
    const checkerCarte=CaretPosition.find(c=>
        c.titlu.toLowerCase()===titlu.toLowerCase().trim()
        && c.autor.toLowerCase()===autor.toLowerCase().trim()
    );
    if(checkerCarte){
        return resp.status(400).json({error:'Carte duplicata'})
    }
    const obiect_nou=new Carte(cnt,titlu.trim(),autor.trim(),'Roman');
    lista_carti.push(obiect_nou);
    
})

app.delete('/carti/:id',(req,resp)=>{
    const id_=parseInt(req.params.id);
    const index_lista=lista_carti.findIndex(c=>c.id===id_)
    const carte_stearsa=lista_carti.splice(index_lista,1)[0]
    console.log(`Cartea a fost stearsa ${carte_stearsa}`)
    resp.json({ success: true,message: 'Cartea a fost stearsa cu succes',carte: carte_stearsa });
})

app.listen(34223,()=>console.log(`Serverul ruleaza pe portul ${34223}`))
