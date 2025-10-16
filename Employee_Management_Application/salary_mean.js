document.getElementById("salary-mean").addEventListener("click", calculateMeanSalary);
function calculateMeanSalary() {
  const table_rows = document.querySelectorAll("#employee-table-body tr");
  let total = 0;
  let counter = 0;

  table_rows.forEach(row => {
    const salary_data = row.querySelector("td:nth-child(4)");
    if (salary_data) {
      const salary = parseFloat(salary_data.textContent);
      if (!isNaN(salary)) {
        total += salary;
        counter++;
      }
    }
  });

  const mean = counter > 0 ? (total / counter) : 0;
  alert(`The mean salary of the employees is ${mean}`);
}
