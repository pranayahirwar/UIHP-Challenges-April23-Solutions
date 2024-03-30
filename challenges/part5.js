let isFocus = false;
let data = {
    myName: "",
    demodataOne: "I am demo data One",
    demodataTwo: "I am demo data Two",
};
let vDOM;
let elems;

function updateData(keyInDataVar, value) {
    // Below code will update the key with specified value, if key is not present i will
    // create new key in data object with specified value.
    // Eg. updateData("newKeyName", "newValue");
    data[keyInDataVar] = value;
    updateDOM();
}

function createVDOM() {
    return [
        [
            "input",
            data.myName,
            function handle(e) {
                updateData("myName", e.target.value);
            },
        ],
        ["div", `Hello, ${data.myName}!`],
        ["div", `Great job, Jonathan!`],
        ["div", `Great job, Alexa!`],
        ["div", `Great job, Emilia!`],
    ];
}

function updateDOM() {
    if (vDOM)
        document.activeElement == document.querySelector("input")
            ? (isFocus = true)
            : (isFocus = false); // keep this code
    vDOM = createVDOM();
    elems = vDOM.map(convert);
    document.body.replaceChildren(...elems);
    if (isFocus) elems[0].focus(); //keep this code
}

function convert(node) {
    const element = document.createElement(node[0]);
    element.textContent = node[1];
    element.value = node[1];
    element.oninput = node[2];
    return element;
}

// function findDiff(prevVDOM, currentVDOM) {
//     for (let i = 0; i < currentVDOM.length; i++) {
//         if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
//             // change the actual DOM element related to that vDOM element!
//         }
//     }
// }

updateDOM();
