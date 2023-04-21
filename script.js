
const socialsOn = document.getElementById("socials")

const socialsOff = document.getElementById("socials-off");
const hamburgerButton = document.getElementById("icon");
hamburgerButton.addEventListener("click", function toggle() {
//   socialsOff.setAttribute("id", "socials")
  if (socialsOn) {
    socialsOn.setAttribute("id", "socials-off")
  }
  else  {
    socialsOff.setAttribute("id", "socials")
  }
  hamburgerButton.addEventListener("click", toggle)

});

// hamburgerButton.addEventListener("click", toggle)
