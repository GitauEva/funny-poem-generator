function generatePoem(event) {
  event.preventDefault();
  // import Typewriter from "typewriter-effect/dist/core";

  new Typewriter("#poem-div", {
    strings: ["There once was a man from Peru."],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#form-generator");
poemFormElement.addEventListener("submit", generatePoem);
