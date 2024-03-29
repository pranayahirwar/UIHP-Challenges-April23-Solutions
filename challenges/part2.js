/*
#################################################
# Part 2.2
#################################################

# Part 2.2 ask us to write one function, which is Responsible for all the UI changes

*/
let post = undefined;

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

function handleInput() {
    post = jsInput.value;
    dataIsChangedUpdateUI();
}

function fnRemoveDefaultValueOfjsInput() {
    post = "";
    dataIsChangedUpdateUI();
}

function dataIsChangedUpdateUI() {
    // This function must contain all the code responsible for change in UI based on some
    // kind of data (like post variable)

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
