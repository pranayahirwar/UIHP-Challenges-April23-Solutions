let myName = "";
let isFocus = false;
let jsInput;
let jsDiv;

let vDOM;

function handleInput(event) {
    myName = event.target.value;
}

function createVDOM() {
    // Add below property to to return array to create nested element.
    // ["div", "I am parent div", "_",
    //        ["div", "I am 1st child element",  "_",
    //              ["div", "I am 2nd child element"]]]

    return [
        ["input", myName, handleInput],
        ["div", myName],
    ];
}

function convert(elementInfo, isItChildElement, parentElement) {
    // Convert passed array to DOM element.
    let newEle = document.createElement(elementInfo[0]);

    if (elementInfo[0] == "input") {
        newEle.placeholder = "What's on your mind !!!"
        newEle.value = elementInfo[1];
        newEle.oninput = handleInput;
    } else {
        // Then it's div.
        newEle.textContent = myName == "" ? "..." : elementInfo[1];
    }

    // Extra Challenge: Creating Nested Elements
    if (elementInfo[3] != undefined) {
        // We are expecting 3rd Index to be Child element. So if undefined no requirement
        // to create child or nested elements.
        newEle = convert(elementInfo[3], true, newEle);
    }

    if (isItChildElement === true) {
        // if elementInfo[3] value is defined, then isItChildElement is true.
        parentElement.appendChild(newEle);
        return parentElement;
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
setInterval(updateVDOM, 1000);
