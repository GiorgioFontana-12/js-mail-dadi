let utenti = ["giorgiofontanaj@gmail.com", "giorgiofontanaj@icloud.com", "pinomauro@gmail.com"]
let logUser = (document.getElementById("inputEmail1").value)
const form = document.getElementById("form");
let verificaUser = false;
form.addEventListener("submit", function(event) {
    event.preventDefault();
    for (let x = 0; x < utenti.length; x++) {
        let utente = (utenti[x])
        console.log (utente)
        if (logUser == utente) {
            verificaUser = true;
        }
    }
});

if (verificaUser == true ) {
    alert ("user loggato ")
}else {
    alert ("user inesistente")
}