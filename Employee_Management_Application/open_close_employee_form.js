document.getElementById("add-employee").addEventListener("click", () => {
  document.getElementById("form-overlay").style.display = "flex";
});

document.getElementById("form-cancel").addEventListener("click", () => {
  document.getElementById("form-overlay").style.display = "none";
});
