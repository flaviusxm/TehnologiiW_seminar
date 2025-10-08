/*const varste=[19,23,53,23,12,14,15,16,67];
const listOver=varste.filter(varsta => varsta> 18);
const listMesaje=listOver.map(varsta=>`Varsta = > ${varsta} ani`);
console.log(listOver);
console.log(listMesaje);
*/

/*
const formatare=(string,...string_format)=>{
    let modified_string=string;
    for(let i=0;i<string_format.length;i++){
            if (modified_string.indexOf('{'+i+'}')!==-1){
                modified_string=modified_string.replace('{'+i+'}',string_format[i]);
            }
    }
return modified_string;
    }
console.log(formatare('Parameter {0} and parameter {1} ','string1','string2'));
*/

/*
const sumChecker=(array,divizor)=>{
    return array.reduce((suma,numar)=>{
        return numar%divizor ===0 ? suma+numar:suma;
    },0);
}
const numere=[1,43,62,34,15,10,5,9,3];
const div=3;
console.log(`Suma nr divizibile cu ${div} este ${sumChecker(numere,div)}`);
*/

/*
const calculateMedie=()=>{
    if (arrayBuffer.length===0)return 0;
    const suma=array.reduce((sum,val)=>sum+val,0);
    return suma/array.length;
}
*/
/*
function keySort(array,key){
    return array.sort((a,b)=>{
        if(a[key]>b[key])return 1;
        if(a[key]<b[key])return -1;
        return 0;
    });
}
const stud=[{nume:"Andrei",medie:9},{nume:"Cristian",medie:7}];
const sortareVarsta=keySort(stud,"medie");
console.log(sortareVarsta);
*/
/*
function gReduce(array,transform,initialVal){
    let sum=initialVal;
    for(let i=0;i<array.length;i++){
        sum=transform(sum,array[i],i,array);
    }
    return sum;
}
const nums=[12,42,51,82,24,51,25]
const suma=gReduce(nums,(sum,val)=>sum+val,0);
console.log(suma);
*/
/*
function transformText(text,dictionar){

    return text.split(" ").map(word=>{
        return dictionar.includes(word)? word.split("").map((litera,i)=>(i===0 || i===word.length-1?litera:"*")).join(""):word;
    }).join(" ");
}
const sentence="javascript este interesant"
const dict=["este"]
const rez=transformText(sentence,dict);
console.log(rez);
*/
