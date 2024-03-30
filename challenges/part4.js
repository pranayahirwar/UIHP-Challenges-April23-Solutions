// let myName = "";

// const vDOM = [
//     [
//         "input",
//         myName,
//         function handle() {
//             myName = jsInput.value;
//         },
//     ],
//     ["div", `Hello, ${myName}!`],
// ];

// function convert(node) {
//     const element = document.createElement(node[0]);
//     element.textContent = node[1];
//     element.value = node[1];
//     element.oninput = node[2];
//     return element;
// }

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

let isFocus = false;

let myName = "";
let jsInput;
let jsDiv;
let vDOM;

// Extra Challenge Part:4.1
function fnReturnRandomNumberFromZeroTo(num) {
    return Math.floor(Math.random() * (num + 1));
}

function randomColor() {
    // random rgb color generator
    return `rgb(
    ${fnReturnRandomNumberFromZeroTo(255)},
    ${fnReturnRandomNumberFromZeroTo(255)},
    ${fnReturnRandomNumberFromZeroTo(255)}
  )`;
}

// Extra Challenge Part:4.2
// Create function and return createElement Object for different type of element, with
// special functionality

function fnCreateInput(value, onInputCallbackFunction) {
    const element = document.createElement("input");
    if (value == "") {
        element.placeholder = "Enter What's on your mind *^____^*";
    } else {
        element.value = value;
    }
    element.oninput = onInputCallbackFunction;
    return element;
}

function fnCreateDiv(textcontext) {
    const element = document.createElement("div");
    element.textContent = textcontext;
    element.style.borderColor = randomColor();
    return element;
}

function createVDOM() {
    return [
        fnCreateInput(myName, function handle(event) {
            myName = event.target.value;
        }),
        fnCreateDiv(`Hello, ${myName}!`),
        fnCreateDiv(`Great Job!`),
        fnCreateDiv(`Another Element...!`),
    ];
}

function updateDOM() {
    document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
    vDOM = createVDOM();
    jsInput = vDOM[0];
    jsDiv = vDOM[1];
    document.body.replaceChildren(...vDOM);
    if (isFocus) jsInput.focus();
}

updateDOM();
setInterval(updateDOM, 2000);
