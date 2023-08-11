const btn = document.querySelector("button");
const massage = document.getElementById("text");
const select = document.getElementById("select");

// const apirul = `https://code.responsivevoice.org/responsivevoice.js?key=${apikey}&src=${encodeURIComponent(massage)}&v=${select}`;

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   let speak = new SpeechSynthesisUtterance(apirul);
//   // speak.lang = select.value;
//   window.speechSynthesis.speak(speak);
// });

btn.addEventListener("click", (event) => {
  event.preventDefault();
  responsiveVoice.speak(`${massage.value}`, `${select.value}`);
});
