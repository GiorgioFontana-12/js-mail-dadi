let utenti = ["giorgiofontanaj@gmail.com", "giorgiofontanaj@icloud.com", "pinomauro@gmail.com"]
let logUser = (document.getElementById("inputEmail1").value)
iform.addEventListener("submit", function(event) {
    event.preventDefault();
    for (let x = 0; x < utenti.length; x++) {
        let utente = (utenti[x])
        console.log (utente)
        if (logUser == utente) {
            alert ("sei loggato")
        }else {
            alert ("credenziali inesistenti")
        }
    }
});