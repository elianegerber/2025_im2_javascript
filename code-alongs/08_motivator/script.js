const nameField = document.querySelector("#firstname");
const skillField = document.querySelector("#skills");
let skillInput = document.querySelector("#add");

function getAndSetName () {
    let nameLocalStorage = localStorage.getItem("name");
    if (nameLocalStorage) {
      nameField.innerText = nameLocalStorage;
    } else {
        let nameInput = prompt ("Bitte gib deinen Namen an:");
        nameField.innerText = nameInput;
        localStorage.setItem("name", nameInput);
}
}
function getAndSetSkillInput() {
    let skills = [];
    skillInput.addEventListener("change", function() {
        skills.push(skillInput.value);
        console.log(skills);
        skillField.innerText = skills;
        skillInput.value = "";
    });
}
function getSkills() {
    skillInput.addEventListener("change", function( {
        skills.push(skillInput.value);
        skillInput.value = "";
    }
    ))
}
function set

//do some stuff
getAndSetName();
getAndSetSkillInput();
getSkills ();