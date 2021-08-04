const source = document.getElementById("title_input");
const result = document.getElementById("main_title");

const inputHandler = function(e) {
  result.innerHTML = e.target.value;
}

source.addEventListener("input", inputHandler);

const submit = document.getElementById("submit_button");
const noun = document.getElementById("noun");
const verb = document.getElementById("verb");
const adj = document.getElementById("adjective");
const formContainer = document.getElementsByClassName("form_container");
const storyResult = document.getElementById("story_result");
function emptyCheck(event) {
    event.preventDefault();
    const nounInput = noun.value;
    const verbInput = verb.value;
    const adjInput = adj.value;
    if (nounInput == "" || verbInput == "" || adjInput == "") {
        alert("Please fill in all fields.");
    } else {
        storyResult.innerText = "Last night I ate a " + nounInput + ", and today I just had to " + verbInput + ". What a " + adjInput + " day!";
        formContainer[0].style["display"] = "none";
    }
}
submit.addEventListener("click", emptyCheck);
