/* class SirPar{
    constructor(initValue){
        this.valCurenta=initValue%2===0?initValue:initValue+1;
    
    }
    next(){
     let rezultat=this.valCurenta;
     this.valCurenta+=2;
     return rezultat;   
    }
}

const sir=new SirPar(10);
for(let i=1;i<92;i++){
    console.log(sir.next());
}
    */

   /*
class Software{
run(){
    console.log("Software ul ruleaza . . .");
}
}
class Plugin extends Software{
    constructor(pluginName){
        super();
        this.name=pluginName;
    }
    install(){
        console.log(`Plugin ul ${this.name}  a fost instalat!`)
    }
}
class Browser extends Software{

    constructor(){
        super()
        this.array=[]
    }
    addPlugin(pluginName){
        this.array.push(pluginName)
    }
    installedPlugin(){
        this.array.forEach(p=>console.log(`Installed plugin ${p}`));
    }
}
const chrome = new Browser();
chrome.run(); 

chrome.addPlugin("BlockerAd");
chrome.addPlugin("YtDownloader");
chrome.installedPlugin();
*/

/*
const powMemoFunction=(nr,expo,dict={})=>{
const key=`${nr},${expo}`;
if (dict[key]!==undefined)return dict[key];
if (expo===0) {dict[key]=1;
    return 1;
}
result=nr*powMemoFunction(nr,expo-1,dict);
dict[key]=result;
return dict[key];
}
console.log(powMemoFunction(2,10));
*/

/*
function increasePay(salarii,per){
    if (!Array.isArray(salarii)){
        throw new Error("Nu este array");
    }
    if(typeof per!=="number"){
        throw new Error("Nu este numar");
    }
    if (!salarii.every(sal=>typeof sal==="number")){
        throw new Error("Nu sunt toate numere");
    }
    return salarii.map((sal=>sal+(sal*per)/100));
}
const salarii=[500,2500,1000];
const modificat=increasePay(salarii,10);
console.log(modificat);
*/

/*
async function planesRetrieval() {
  const uri = "https://opensky-network.org/api/states/all";

  try {
    const raspuns = await fetch(uri);
    const data = await raspuns.json();
    const minLat = 44;
    const maxLat = 49;
    const minLon = 20;
    const maxLon = 30;

    const planes = data.states.filter(plane => {
	const lon = plane[5];      
const lat = plane[6]; 
      return lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon;
    });

    console.log(`Avioane gasite: ${planes.length}`);
    console.log(planes); 
  } catch (err) {
    console.error("Eroare", err);
  }
}
planesRetrieval();
*/

const deepclone=(obiect)=>{
if(obiect===null || typeof obiect!=='object'){return obiect;}
if(Array.isArray(obiect)){
    return obiect.map(item=>deepclone(item));
}
const obj_obj={};
for(const key in obiect){
    if(obiect.hasOwnProperty(key)){obj_obj[key]=deepclone(obiect[key]);}
}
return obj_obj;
}
const student5242={
    nume:"Laura",
    varsta:21,
    note:{
        mate:[2,10],
        info:[10,10]
    },
    adresa:{
        strada:"Calea Victoriei Bloc b 39 bis ap 21"
    }
};

const student_clona=deepclone(student5242);
console.log(student5242!==student_clona);
console.log(student5242!==student_clona.note);
console.log(student5242.nume===student_clona.nume);

student_clona.nume="Andreea";
student_clona.note.mate.push(5);
console.log(student_clona.nume);
console.log(student_clona.note.mate);