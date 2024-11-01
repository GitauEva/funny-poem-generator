function displayPoem(response) {
  console.log("generated poem");
  new Typewriter("#poem-div", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".instructions").value;

  let apikey = "f3bc84a5t55d232e835bfe4a96o890e3";
  let prompt = `User instructions are: Generate a funny poem about ${instructionsInput}`;
  let context =
    "You are a funny poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Do not add the word html or any tapestry strings at the beginning an end. Make sure to use the user instructions below. Add a Title to the poem and sign the poem 'SheCodes AI' ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#form-generator");
poemFormElement.addEventListener("submit", generatePoem);
