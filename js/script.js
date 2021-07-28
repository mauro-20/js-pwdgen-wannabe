var firstName = prompt('Insert your name')
var lastName = prompt('Insert your last name')
var color = prompt("Hi " + firstName + ", what's your favourite color?")
var password = firstName + lastName + color + '40'
document.getElementById('psw').innerHTML += password
