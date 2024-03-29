let myName = "";
let isFocus = false;
let jsInput;
let jsDiv;

let vDOM;

function handleInput(event) {
    myName = event.target.value;
    console.log("I have been called: ", myName);
}

function createVDOM() {
    return [
        ["input", myName, handleInput],
        ["div", myName],
    ];
}

function convert(elementInfo) {
    // Convert passed array to DOM element.
    let newEle = document.createElement(elementInfo[0]);
    newEle.textContent = elementInfo[1];

    if (elementInfo[0] == "input") {
        newEle.value = elementInfo[1];
        newEle.oninput = handleInput;
    }

    return newEle;
}

function updateVDOM() {
    // Line #1 & #2 if condition is used to focus our cursor again on newly rendred input
    // element on which our cursor previously on.
    document.activeElement === jsInput ? (isFocus = true) : (isFocus = false); // Line #1

    vDOM = createVDOM();

    // Creating elemetns from vDOM Array, by passing sub-array from array to map.
    elems = vDOM.map(convert);
    jsInput = elems[0];
    jsDiv = elems[1];

    // Convert passed array to DOM element.
    // Attaching HTML Elements in JS to DOM
    document.body.replaceChildren(...elems);

    if (isFocus) jsInput.focus(); // Line #2
}

updateVDOM();
// setInterval(updateVDOM, 1000);
