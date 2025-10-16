document.getElementById("show-all").addEventListener("click",function(){
    const employees_local_storage=JSON.parse(localStorage.getItem("employees"))||[];
    const body_tabel=document.getElementById("employee-table-body");
    body_tabel.innerHTML=``;
    employees_local_storage.forEach((element,index) => {
        const new_row=document.createElement("tr");
        new_row.innerHTML=`
         <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.role}</td>
        <td>${element.salary}</td>
        <td><button onclick="delete_employee(${index})">⛔</button></td>
        `
        body_tabel.appendChild(new_row);
    });
})