/*
#################################################
# Part 2.2
#################################################

# Part 2.2 ask us to write one function, which is Responsible for all the UI changes

*/
let post = undefined;
let didUserClickedSubmitButton = false;

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
const jsSavedDataDiv = document.querySelector(".saved-data");
const jsButton = document.querySelector("button");

function handleSubmitButton() {
    // This function updates the data in JS and triggers the dataIsChangedUpdateUI() function to update the UI.
    didUserClickedSubmitButton = true;
    dataIsChangedUpdateUI();
}

function handleInput() {
    // This function updates the data in JS and triggers the dataIsChangedUpdateUI() function to update the UI.
    post = jsInput.value;
    dataIsChangedUpdateUI();
}

function fnRemoveDefaultValueOfjsInput() {
    // This function updates the data in JS and triggers the dataIsChangedUpdateUI() function to update the UI.
    post = "";
    dataIsChangedUpdateUI();
}

function dataIsChangedUpdateUI() {
    // This function must contain all the code responsible for change in UI based on some
    // kind of data (like post variable)

    if (didUserClickedSubmitButton == true) {
        let newDiv = document.createElement("div");
        let newParagraph = document.createElement("p");
        newParagraph.textContent = post;

        newDiv.appendChild(newParagraph);
        jsSavedDataDiv.appendChild(newDiv);

        // Resetting post to display default data
        post = undefined;
        didUserClickedSubmitButton = false;
    }

    if (post == undefined) {
        jsInput.value = "Enter What's on your mind !!!";
    } else {
        jsInput.value = post;
        jsDiv.textContent = post;
    }
}

// Another way to add Event Handler.
jsInput.oninput = handleInput;
jsInput.onclick = fnRemoveDefaultValueOfjsInput;
jsButton.onclick = handleSubmitButton;

dataIsChangedUpdateUI();

/*
#################################################
# PART 2.1
#################################################

# Here we have achived, presenting user with default message on input element and when user
# click on the input element and try to change it's value, default message will be removed
# and character entered by user will be updated in input and div element.

# PROBLEM
# We are changing UI in different places in our code based on different User actions, which
# might become problem in future, hence we need to follow a One Way Data Binding Paradigm. 


let post = "";

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
jsInput.value = "Enter What's on your mind !!!";

function handleInput() {
    post = jsInput.value;
    jsDiv.textContent = post;
}

function fnRemoveDefaultValueOfjsInput() {
    jsInput.value = "";
}

// Another way to add Event Handler.
jsInput.oninput = handleInput;
jsInput.onclick = fnRemoveDefaultValueOfjsInput;

*/
