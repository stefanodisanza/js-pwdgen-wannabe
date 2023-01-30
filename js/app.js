console.log('prendo elemento html con id first-title')
const titleElement = document.getElementById('first-title')

// titleElement = 'pippo'

console.log(titleElement.innerHTML)
console.dir(titleElement)


let nome
let cognome
let colorePreferito
let numeroPreferito

// Chiedi all’utente il suo nome,
nome = prompt('Come ti chiami?')
console.log('la variante nome è = ', nome)

// poi chiedi il suo cognome,
cognome = prompt('Come fai di cognome?')
console.log('la variante cognome è = ', cognome)

// poi chiedi il suo colore preferito
colorePreferito = prompt('Quale colore preferisci?')
console.log('la variante colore preferito è = ', colorePreferito)

// e un numero
numeroPreferito = prompt('Quale numero preferisci?')
console.log('la variante numero preferito è = ', numeroPreferito)


// Infine scrivi sulla pagina il risultato della concatenazione di: <nome><cognome><colorePreferito><numero></numero>
let password = nome + cognome + colorePreferito + numeroPreferito;

titleElement.innerHTML = password



// // CONCATENAZIONE DI STRINGHE
// titleElement.innerHTML = message + nome + ' ' + cognome + '.'

