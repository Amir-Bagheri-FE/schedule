const AddBox = document.getElementById("AddTask");
const popUpForm = document.getElementById("popUpForm");
const FormTask = document.querySelector("#FormTask");

AddBox.addEventListener("click", () => {
  popUpForm.style.display = "flex";
  popUpForm.addEventListener("click", (e) => {
    if (e.target === popUpForm) {
      popUpForm.style.display = "none";
    }
  });
});
FormTask.addEventListener("submit", (e) => {
  e.preventDefault();
});
