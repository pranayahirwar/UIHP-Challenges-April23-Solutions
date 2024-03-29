/** Write your code below */
console.log("Script started running...");

// VARS
let post = "";

let jsInput = document.querySelector("input");
let jsDiv = document.querySelector("div");

function handleInput() {
    console.log("Running handleInput...");
    
    // Saving newly updated char in post var, to update jsDiv
    post = jsInput.value;

    // updating jsDiv with freshly updated post var.
    jsDiv.textContent = post;
}

// Because of input type event, handleInput will be called each time, when user input
// each character.
jsInput.addEventListener("input", handleInput);
