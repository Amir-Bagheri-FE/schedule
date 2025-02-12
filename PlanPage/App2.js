let PlanObject = JSON.parse(localStorage.getItem("plan")); //getting plan detail as object

// ----------------Single Plan Page ---------------------
document.addEventListener("DOMContentLoaded", () => {
  let title = document.getElementById("PlanTitle");
  let description = document.getElementById("PlanDescription");
  let Time = document.getElementById("PlanTime");
  title.textContent = "Plan Title:  " + PlanObject.Title;
  description.textContent = "description: " + PlanObject.Description;
  Time.textContent = PlanObject.Time;
});
//Displaying text files in page
let AddedFile = document.getElementById("file");
AddedFile.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) { 
      document.getElementById("fileContent").innerText = e.target.result;;
    };
    reader.readAsText(file);
  }
});
function displayTimer() {
  let Hours = document.getElementById("timeHours");
  let Minutes = document.getElementById("timeMinutes");
  let Seconds = document.getElementById("timeSeconds");
  let Timer = document.createElement("p");
  Timer.classList.add('Timer')
  const InfoDiv = document.getElementById("infoDiv");
  InfoDiv.append(Timer);
  let TimerSeconds = Seconds.value < 10 ? "0" + Seconds.value : Seconds.value;
  let TimerMinutes = Minutes.value < 10 ? "0" + Minutes.value : Minutes.value;
  let TimerHours = Hours.value < 10 ? "0" + Hours.value : Hours.value;
  //displaying a time circle
  let allTime =(TimerHours*3600)+(TimerMinutes*60)+TimerSeconds
  const timecircle=document.createElement('div');
  const timeInnercircle=document.createElement('div');
  timecircle.classList.add('timecircle')
  timeInnercircle.classList.add('timeInnercircle')
  InfoDiv.append(timecircle)
  timecircle.append(timeInnercircle)
  //time in info div
  Timer.textContent = TimerHours + ":" + TimerMinutes + ":" + TimerSeconds;
  const interval = setInterval(function TimerCountDown() {
       
       const  currentTIme =(TimerHours*3600)+(TimerMinutes*60)+TimerSeconds
       const timePercent=(currentTIme*100)/allTime;
       if(timePercent<8 && timePercent>5.6){
        timeInnercircle.style.top='17px'
       }
       else if (timePercent<5.5 && timePercent > 3.1){
        timeInnercircle.style.top='20px'
       }
       else if (timePercent<3){
        timeInnercircle.style.top='25px'
       }
    if (Number(TimerSeconds) != 0) {
      TimerSeconds =
        TimerSeconds < 10 ? "0" + (TimerSeconds - 1) : TimerSeconds - 1;
      const completeTime = TimerHours + ":" + TimerMinutes + ":" + TimerSeconds;
      Timer.textContent = completeTime;
    } else {
      if (Number(TimerMinutes) != 0) {
        TimerMinutes =
          TimerMinutes < 10 ? "0" + (TimerMinutes - 1) : TimerMinutes - 1;
        const completeTime =
          TimerHours + ":" + TimerMinutes + ":" + TimerSeconds;
        Timer.textContent = completeTime;
        TimerSeconds = 59;
      } else {
        if (Number(TimerHours) != 0) {
          TimerHours = TimerHours < 10 ? "0" + TimerHours - 1 : TimerHours - 1;
          const completeTime =
            TimerHours + ":" + TimerMinutes + ":" + TimerSeconds;
          Timer.textContent = completeTime;
          TimerMinutes = 59;
          TimerSeconds = 59;
        } else {
          Timer.textContent = "time is over";
          clearInterval(interval);
        timeInnercircle.style.top='30px'

        }
      }
    }
  }, 1000);
}
