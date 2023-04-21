
// const socialsOn = document.getElementById("socials")

// const socialsOff = document.getElementById("socials-off");
// const hamburgerButton = document.getElementById("icon");
// hamburgerButton.addEventListener("click", function toggle() {
// //   socialsOff.setAttribute("id", "socials")
//   if (socialsOn) {
//     socialsOn.setAttribute("id", "socials-off")
//   }
//   else  {
//     socialsOff.setAttribute("id", "socials")
//   }
//   hamburgerButton.addEventListener("click", toggle)

// });

// hamburgerButton.addEventListener("click", toggle)

const text = document.querySelector(".main-intro");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
console.log(splitText);