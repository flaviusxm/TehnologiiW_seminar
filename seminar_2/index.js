/* const returnString=(arrayString)=>{
return arrayString.join(" ");
}

console.log(returnString(['Editan','Cata']));
*/



/*
const diffCharacters=(string1,string2)=>{
if (string1.length!==string2.length)
{
   return -1;
}
let diffCounter=0;
for (let i=0;i<string1.length;i++){
    if (string1[i]!==string2[i]){
          diffCounter++;
    }
    else{
        continue;    }
}
return diffCounter;
}
console.log(diffCharacters("Maria","Daria"));
*/
/*
const listToArray=(list)=>{
let array=[];
for(let i=0;i<list.length;i++){
    array.push(Number(list[i]));
}
return array;
}

console.log(listToArray(["12","32","24","53","23","43","23"]))
*/
/*
const mergeArray=(...lists)=>{
const result = [];
const length=lists[0].length;
  for (let i = 0; i < length; i++) {
    for ( let list of lists){
    result.push(list[i]);
    }
  }

  return result;
}

const a = [1, 2, 3];
const b = [4, 5, 6];
console.log("Intercalare",mergeArray(a,b));
*/

/*
const n=parseInt(process.argv[2]);
const Fibonacci=(n)=>
{
    if (n<2){
        return n;
    }
    return Fibonacci(n-1)+Fibonacci(n-2);
}
console.log(`Fibonacci pentru ${n} = > ${Fibonacci(n)}`);
*/

/*
const countLetters=(string)=>{
const result={};
for (let ch of string){
    if (ch in result && ch!==' '){
            result[ch]++;
    }else if (!( ch in result) && (ch!=='')){
        result[ch]=1;
    }
}
return result;
}

console.log(countLetters("Marius a fost la cumparaturi ieri"));
*/