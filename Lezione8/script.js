
//selezioniamo l'elemento titololezione all'interno del DOM
let titololez = document.getElementById('titololezione')

let sottotitolo = document.getElementById('sottotitolo')

//selezioniamo l'elemento bottone nel DOM 
let btncambioTitolo = document.getElementById('pluto')

//addEventListerner ->  richiamo il bottone in ascolto
//'click' -> evento come click 
//cambioTitolo richiamo la funzione con le sue regole 
btncambioTitolo.addEventListener('click', cambioTitolo)

//definiamo una funzione per la modifica del titolo 
//fuction -> definire una funzione
//cambioTitolo -> nome della funzione 
//() -> eventuali parametri 
//{ -> apro la funzione 
function cambioTitolo(){

    titololez.textContent = "Lezione 08"
    titololez.style.color = "blue"

    sottotitolo.textContent = "30/10/2027"
    sottotitolo.style.fontStyle = "italic"
    
}

