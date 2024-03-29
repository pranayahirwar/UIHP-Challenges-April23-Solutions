let myName = "";
let isFocus = false;

let jsInput;
let jsDiv;

function component() {
    // Line #1 & #2 if condition is used to focus our cursor again on newly rendred input element
    document.activeElement === jsInput ? (isFocus = true) : (isFocus = false); // Line #1

    /**
     * Updating myName variable with value of jsInput.value before creating new jsInput element
     *
     * Below if condition mean, if jsInput is undefined then at this point we haven't created
     * jsInput object, which contain HTML input element, because of which it won't have
     * jsInput.value, So let's continue.
     */
    if (jsInput != undefined) {
        myName = jsInput.value;
    }

    // Creating HTML Element in JS
    jsInput = document.createElement("input");
    jsDiv = document.createElement("div");

    // Updating Data for input and div element.
    jsDiv.textContent = (myName == "") ? "..." : myName;
    jsInput.value = myName;

    // Attaching HTML Elements in JS to DOM
    document.body.replaceChildren(jsInput, jsDiv);

    if (isFocus) jsInput.focus(); // Line #2
}

setInterval(component, 1000);
component();
