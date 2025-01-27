const AddBox = document.getElementById("AddTask");
const popUpForm = document.getElementById("popUpForm");
const FormTask = document.querySelector("#FormTask");
let mainColumn = document.getElementById("main");
let TitlesArray =new Array(0) // for saving titles in list
let  LikedSet = new Set()
AddBox.addEventListener("click", () => {
  popUpForm.style.display = "flex";
  let Tasktitle = document.getElementById("Title");
  Tasktitle.focus()
  popUpForm.addEventListener("click", (e) => {
    if (e.target === popUpForm) {
      popUpForm.style.display = "none";
    }
  });
});
//for tracing the value & place 
let gridCounter = 2;
 let PlanObject={Title:'',Description:'',Time:''} //object for sending info to single page
FormTask.addEventListener("submit", (e) => {
  e.preventDefault();
  popUpForm.style.display = "none";
  //form inputs
  if (mainColumn.childElementCount <= 4) {
    let Tasktitle = document.getElementById("Title");
    let description = document.getElementById("Description");
    if (Tasktitle.value === "") {
      alert("please add a title");
    } else {
      //making new boxes for added plans
      const newPlan = document.createElement("div");
      mainColumn.append(newPlan);
      newPlan.classList.add("addedPlan");
      newPlan.style.gridRowStart = gridCounter;
      gridCounter++;
      // buttons for boxes
      let iconsDiv = document.createElement("div");
      iconsDiv.classList.add("iconsDiv");
      newPlan.append(iconsDiv);
      const trash = document.createElement("li");
      const page = document.createElement("li");
      const up = document.createElement("li");
      const down = document.createElement("li");
      const like = document.createElement("li");
      const Link = document.createElement('a')
      trash.classList.add("fas", "fa-trash");
      page.classList.add("fas", "fa-file-alt");
      up.classList.add("fas", "fa-caret-up");
      down.classList.add("fas", "fa-caret-down");
      like.classList.add("fas", "fa-heart");
      let clicked=false // for switch Like button
      iconsDiv.append(trash, Link, up,down, like);
      Link.append(page)
      Link.setAttribute('href','./PlanPage/TaskPage.html');
      Link.setAttribute('target','blank');
      //adding functionality on icons
      //deleting button
      trash.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
      });
      //up button
      up.addEventListener("click", (e) => {
        let box = e.target.parentElement.parentElement;
        let currentRow = parseInt(
          getComputedStyle(box).getPropertyValue("grid-row-start")
        );
        if (2 < currentRow && currentRow <= 5) {
          box.style.gridRowStart = currentRow - 1;
        }
      });
      //down button
      down.addEventListener("click", (e) => {
        let box = e.target.parentElement.parentElement;
        let currentRow = parseInt(
          getComputedStyle(box).getPropertyValue("grid-row-start")
        );
        if (2 <= currentRow && currentRow < 5) {
          box.style.gridRowStart = currentRow + 1;
        }
      });
      //Like button
      like.addEventListener('click',function(e){
        if(!clicked){
         LikedSet.add(e.target.parentElement.nextElementSibling.textContent)
        like.style.color='aquamarine'
        clicked=true
         
        } 
        else{
        like.style.color='rgb(186, 186, 186)'
        clicked=false
        LikedSet.delete(e.target.parentElement.nextElementSibling.textContent)
        }
      })
      //page button
      page.addEventListener('click',(e)=>{
        PlanObject.Title=e.target.parentElement.parentElement.nextElementSibling.textContent;
        PlanObject.Description=e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent;
        PlanObject.Time=e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        localStorage.setItem("plan",JSON.stringify(PlanObject));//saving plan details as string  
      })
      //inserting info in boxes
      let Title = document.createElement("h3");
      newPlan.append(Title);
      Title.textContent = Tasktitle.value;
      let describe = document.createElement("p");
      newPlan.append(describe);
      describe.textContent = description.value;
      let time = document.createElement("p");
      newPlan.append(time);
      // current time 
     let Timer= new Date();
     let hours=Timer.getHours()
     let minutes=Timer.getMinutes()
     let Day =Timer.getDate()
     let month=Timer.getMonth()
     hours=hours < 10 ? '0'+hours : hours.toString();
     minutes=minutes < 10 ? '0'+minutes : minutes.toString();
      time.textContent =`Added in: ${hours}:${minutes} - ${month+1}/${Day}th`
      // last added lists 
      TitlesArray.push(Tasktitle.value)
    }
  } else {
    alert("maximum number plans reached please remove one");
  }
});
// displaying last Titles
function DisplayLastAdds(){
  let poUp=document.getElementById('popUpList')
  const listContainer=document.getElementById('listContainer')
  poUp.style.display='flex'
  let Title= document.createElement('h3')
  for(let i=0; i<TitlesArray.length;i++){
    listContainer.append(Title)
    Title.textContent=TitlesArray[i]
  }
  poUp.addEventListener('click',(e)=>{
    if (e.target  ===poUp){
      poUp.style.display='none'
      Title.remove()
    }
  })
}
// displaying liked titles
function DisplayFav(){
  let popUp=document.getElementById('favList')
  const listContainer=document.getElementById('FavContainer')
  popUp.style.display='flex'
  let likeArray =Array.from(LikedSet);
  for(let i=0; i< likeArray.length;i++){
    let Title= document.createElement('h3')
    listContainer.append(Title)
    Title.textContent= likeArray[i]
  }
  popUp.addEventListener('click',(e)=>{
    if (e.target  ===popUp){
      popUp.style.display='none'
      listContainer.innerHTML=''
    }
  })
}