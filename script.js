const alertsDiv = document.querySelector(".alerts")
function createAlert(text, color, duration=60){
    const alertElement = document.createElement("div")
    alertElement.innerHTML = 
    `<div class="alert" style="background-color: ${color};">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    ${text}
  </div>`
  alertsDiv.appendChild(alertElement)
}
let clickCount = 0;
let button = document.querySelector(".button")
const buttonText = document.querySelector(".btntext")
const text = [null, "Again", "One more time", "bruh"]
function buttonClick() {
  clickCount++;
  console.log(clickCount)
  if(text[clickCount]){
    buttonText.innerText = text[clickCount]
  }
  if(clickCount === 3){
    button.className+=" animate__animated animate__hinge"
    setTimeout(() => {
      createAlert("Yeah this shit broken idk why", "#e63946")
    }, 3000);
  }
}