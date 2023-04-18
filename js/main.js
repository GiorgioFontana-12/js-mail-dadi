let utenti = ["luca", "mario", "luigi"]
let logUser = prompt( "inserisciCredenziali" )
for (let x = 0; x < utenti.length; x++) {
    let utente = (utenti[x])
    if (logUser == utente) {
        alert ("sei loggato")
        
    }
}
