document.getElementById("employee-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("id").value.trim();
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const salary = document.getElementById("salary").value.trim();

  if (!id || !name || !role || !salary) return;

  const emp_nou = { id, name, role, salary };

  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const checker = employees.find(emp => emp.id === id);
  if (checker) {
    alert("Employee already registered ! ! !");
    return;
  }

  employees.push(emp_nou);
  localStorage.setItem("employees", JSON.stringify(employees));

  document.getElementById("employee-form").reset();
  document.getElementById("form-overlay").style.display = "none";
});
