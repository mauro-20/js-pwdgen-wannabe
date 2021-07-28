var firstName = prompt('Inserisci il tuo nome')
var lastName = prompt('Inserisci il tuo cognome')
var color = prompt("ciao " + firstName + ", qual'è il tuo colore preferito?")
var password = firstName + lastName + color + 40
document.getElementById('psw').innerHTML = password
