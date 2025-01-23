 let PlanObject=JSON.parse(localStorage.getItem('plan'))//getting plan detail as object
console.log(PlanObject);




// ----------------Single Plan Page ---------------------
document.addEventListener('DOMContentLoaded',()=>{
     
      let title=document.getElementById('PlanTitle')
      let description=document.getElementById('PlanDescription')
      let Time = document.getElementById('PlanTime')
      title.textContent=PlanObject.Title;
      description.textContent=PlanObject.Description;
      Time.textContent=PlanObject.Time;
    
    })