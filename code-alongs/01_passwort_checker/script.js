console.log('hi script.js')

let password = prompt("Passwort eingeben")
let username = prompt("Username eingeben")
checkStringLengt(password, 12);
checkStringLengt(username, 7)

function checkPasswort (pw) {
checkPasswort(password);
checkPasswort(username);
    if (password. length <11) {
        console.log("Das Passwort ist lang genug!")
         } else {
        console.log("Bitte verwende ein längeres Passwort.")
    }
}

function checkStringLengt(testString, testLength) {
    if (testString.length >= testLength) {
        console.log("Der Text ist lang genug");
    } else {
        console.log("Bitte verwende einen längeren Text.");
    }

    
}
