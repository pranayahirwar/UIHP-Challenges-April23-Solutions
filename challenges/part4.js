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

function createVDOM() {
    return [
        [
            "input",
            myName,
            function handle(event) {
                myName = event.target.value;
            },
        ],
        ["div", `Hello, ${myName}!`],
        ["div", `Great Job!`],
        ["div", `Another Element...!`],
    ];
}

function updateDOM() {
    document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
    vDOM = createVDOM();
    elems = vDOM.map(convert);
    jsInput = elems[0];
    jsDiv = elems[1];
    document.body.replaceChildren(...elems);
    if (isFocus) jsInput.focus();
}

function convert(node) {
    const element = document.createElement(node[0]);
    element.textContent = node[1];
    element.value = node[1];
    element.oninput = node[2];
    if (node[0] == "div") {
        element.style.borderColor = randomColor();
    }
    return element;
}

updateDOM();
// setInterval(updateDOM, 1000);
