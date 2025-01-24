 let PlanObject=JSON.parse(localStorage.getItem('plan'))//getting plan detail as object




// ----------------Single Plan Page ---------------------
document.addEventListener('DOMContentLoaded',()=>{
     
      let title=document.getElementById('PlanTitle')
      let description=document.getElementById('PlanDescription')
      let Time = document.getElementById('PlanTime')
      title.textContent='Plan Title:  '+PlanObject.Title;
      description.textContent='description: '+PlanObject.Description;
      Time.textContent=PlanObject.Time;
      Time.style.backgroundColor='red'
      Time.style.fontWeight='bold'
      Time.style.color='white'
    })