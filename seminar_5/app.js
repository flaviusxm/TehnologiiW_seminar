const file_system=require('fs');
const path=require('path');

async function functiePrincipala(numar) {
    const path_dir=path.join(__dirname,'director');

    switch(numar){
        case 1:
            file_system.mkdir(path_dir,{recursive:true},(err)=>{
                if(err){
                    console.log(`Eroare: ${err.message}`);
                    return;
                }
                console.log("Folder creat");
                setTimeout(()=>{
                    functiePrincipala(2);
                },1000);
            });
            break;
        case 2:
            file_system.writeFile((path.join(path_dir,'fisiertest.txt')),`${new Date().getFullYear()}`,'utf8',(err)=>{
                if(err){
                    console.log(`${err.message}`);
                    return;
                }
console.log("Fisier creat");
                setTimeout(()=>{
                    functiePrincipala(3);
                },1000);
            }
    )
    break;
     case 3:
            
            file_system.rm(path_dir,{recursive:true,force:true}, (err) => {
                if(err) {
                    console.error(`Eroare: ${err.message}`);
                    return;
                }
                console.log("Am sters tot!");
                console.log("\nAll tasks completed!!!");
            });
            break;
    }
}
const start=process.argv[2]?parseInt(process.argv[2]):3;
functiePrincipala(start);