const AddBox = document.getElementById("AddTask");
const popUpForm = document.getElementById("popUpForm");
const FormTask = document.querySelector("#FormTask");
let mainColumn = document.getElementById('main')
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
  popUpForm.style.display = "none";
  //form inputs 
  if(mainColumn.childElementCount<= 4){
  let Tasktitle=document.getElementById('Title')
  let  description=document.getElementById('Description')
  let timeout = document.getElementById('time')
  //making new boxes for added plans
  const newPlan = document.createElement('div')
  mainColumn.append(newPlan)
  newPlan.classList.add('addedPlan')
  //inserting info in boxes
  let Title=document.createElement('h3')
  newPlan.append(Title)
  Title.textContent=Tasktitle.value
  let describe=document.createElement('p')
  newPlan.append(describe)
  describe.textContent=description.value
  let time=document.createElement('p')
  newPlan.append(time)
  time.textContent=timeout.value+"🕛"
}
else {alert('maximum number plans reached please remove one')}
});
