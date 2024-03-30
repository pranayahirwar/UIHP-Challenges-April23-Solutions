let isFocus = false; // this var with updateDOM, help us refocus our cursor to same place after rerender of DOM element.
let data = {
    myName: "",
    demodataOne: "I am demo data One",
    demodataTwo: "I am demo data Two",
};
let vDOM;
let prevVDOM;
let elems;

function updateData(keyInDataVar, value) {
    // Below code will update the key with specified value, if key is not present i will
    // create new key in data object with specified value.
    // Eg. updateData("newKeyName", "newValue");
    data[keyInDataVar] = value;
    requestAnimationFrame(updateDOM);
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

    if (vDOM == undefined) {
        // We enter here only one time, when vDOM is not created.
        vDOM = createVDOM();
        elems = vDOM.map(convert);
        document.body.replaceChildren(...elems);
    } else {
      prevVDOM = [...vDOM]
      vDOM = createVDOM() // Here vDOM act like currentVDOM or newVDOM
      findDiff(prevVDOM, vDOM) // We expect findDiff to update or reconcile C++ DOM based prevVDOM & vDOM changes in value.
    }
    if (isFocus) elems[0].focus(); //keep this code
}

function convert(node) {
    const element = document.createElement(node[0]);
    element.textContent = node[1];
    element.value = node[1];
    element.oninput = node[2];
    return element;
}

function findDiff(prevVDOM, currentVDOM) {
    for (let i = 0; i < currentVDOM.length; i++) {
        if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
            // change the actual DOM element related to that vDOM element!
            // console.log(prevVDOM[i], " || ", currentVDOM[i]);
            
            // elems array, contain special link b/w all JS object which are created using
            // createElement and C++ DOM. Hence using elems we can update DOM in C++ Land
            if (prevVDOM[i][0] == "div") {
              // this points to type of element div or input
              elems[i].textContent = currentVDOM[i][1]
            }

            // The Diff strategy we are using, MAKE US UPDATE ALL ATTRIBUTES (like, placeholder
            // for input, textContext for div, etc.) which we have used during creation of 
            // element to render in DOM, but Here we are only changing textContent because
            // It's the only thing which is getting updated in our current code based on 
            // change in State or data object.
            
            
            // We might have used below code to update input element, but we aren't because
            // elems[i].value get updated element from data.myName, before coming to this
            // findDiff function we have already updated, data.myName, hence it will be
            // updated automatically in the browser
            // elems[i].value = currentVDOM[i][1]
        }
    }
}

requestAnimationFrame(updateDOM);
