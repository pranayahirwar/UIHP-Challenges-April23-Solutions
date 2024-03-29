let myName = "";
let isFocus = false;

let jsInput;
let jsDiv;

function dataToView() {
    jsInput.value = myName;
    jsDiv.textContent = myName;
}

function handleInput() {
    myName = jsInput.value;
}

function component() {
    // Line #1 & #2 if condition is used to focus our cursor again on newly rendred input element
    document.activeElement === jsInput ? (isFocus = true) : (isFocus = false); // Line #1

    //your code here
    jsInput = document.createElement("input");
    jsDiv = document.createElement("div");
    jsDiv.textContent = "...";

    document.body.replaceChildren(jsInput, jsDiv);

    if (isFocus) jsInput.focus(); // Line #2
}

component();
jsInput.oninput = handleInput;
setInterval(dataToView, 2000);
