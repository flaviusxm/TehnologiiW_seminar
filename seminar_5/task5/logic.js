document.addEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("form_contact");
    const bodyContacts=document.getElementById("body_contacts");
    let contacte=JSON.parse(localStorage.getItem("contacte"))||[];

    function salveazaDate(){
        localStorage.setItem("contacte",JSON.stringify(contacte));
    }
    function stergeContact(nume,telefon){
        const contactCautat=contacte.find(
            c=>c.nume===nume && c.telefon===telefon
        );
        if(contactCautat){
            const index=contacte.indexOf(contactCautat);
            if(index!==-1){
                contacte.splice(index,1);
                salveazaDate();
                afiseazaDate();
            }
        }
    }
    function afiseazaDate(){
        bodyContacts.innerHTML="";
        contacte.forEach((element,index) => {
            const row=document.createElement("tr");
            row.innerHTML = `
  <td>${element.nume}</td>
  <td>${element.telefon}</td>
  <td><button onclick="stergeContact('${element.nume}', '${element.telefon}')">Sterge</button></td>
`;

            bodyContacts.appendChild(row);
        });

    }
window.stergeContact = stergeContact;


    form.addEventListener("submit",function(e){
        e.preventDefault();
        const nume=document.getElementById("nume").value.trim();
        const telefon=document.getElementById("telefon").value.trim();
        if (nume &&  telefon){
            contacte.push({nume,telefon});
            salveazaDate();
            afiseazaDate();
            form.reset();
        }
    });
    afiseazaDate();
});