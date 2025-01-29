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
   let AddedFile = document.getElementById('file')
    AddedFile.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
        console.log(file);
          const reader = new FileReader();
          reader.onload = function(e) {
              const content = e.target.result;
              document.getElementById('fileContent').innerText = content;
          };
          reader.readAsText(file); 
      }
  });