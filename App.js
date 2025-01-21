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
//for tracing the value 
let gridCounter = 2;
FormTask.addEventListener("submit", (e) => {
  e.preventDefault();
  popUpForm.style.display = "none";
  //form inputs 
  if(mainColumn.childElementCount<= 4){
  let Tasktitle=document.getElementById('Title')
  let  description=document.getElementById('Description')
  let timeout = document.getElementById('time')
  if(Tasktitle.value===''){
    alert('please add a title')
  }
  else{
  //making new boxes for added plans
  const newPlan = document.createElement('div')
  mainColumn.append(newPlan)
  newPlan.classList.add('addedPlan')
  newPlan.style.gridRowStart=gridCounter
  gridCounter++
  // buttons for boxes
   let iconsDiv=document.createElement('div')
   iconsDiv.classList.add('iconsDiv')
   newPlan.append(iconsDiv)
   const trash=document.createElement('li')
   const page=document.createElement('li')
   const up=document.createElement('li')
   const down=document.createElement('li')
   trash.classList.add('fas', 'fa-trash')
   page.classList.add('fas', 'fa-file-alt')
   up.classList.add('fas', 'fa-caret-up')
   down.classList.add('fas', 'fa-caret-down')
   iconsDiv.append(trash,page,up,down)
   //adding functionality on icons
   trash.addEventListener('click',(e)=>{
    e.target.parentElement.parentElement.remove()
   })
   up.addEventListener('click',(e)=>{
   let box= e.target.parentElement.parentElement
   let currentRow=parseInt(getComputedStyle(box).getPropertyValue('grid-row-start'))
   if (2<currentRow<=5){
    box.style.gridRowStart=currentRow-1
   }
   })
   down.addEventListener('click',(e)=>{
    let box= e.target.parentElement.parentElement
    let currentRow=parseInt(getComputedStyle(box).getPropertyValue('grid-row-start'))
    if (2<=currentRow<5){
     box.style.gridRowStart=currentRow+1
    }
    })
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
}
else {alert('maximum number plans reached please remove one')}
});
