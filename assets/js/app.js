console.log("activacion")

const numeroUno = +prompt("numero 1")
const numeroDos = +prompt("numero 2")

const resultadoSuma = numeroUno + numeroDos
const resultadoResta = numeroUno - numeroDos
const resultadoMultiplicacion = numeroUno * numeroDos
const resultadoDivision = numeroUno / numeroDos 
const resultadoModulo = numeroUno % numeroDos

alert(resultadoSuma)
alert(resultadoResta)
alert(resultadoMultiplicacion)
alert(resultadoDivision)
alert(resultadoModulo)


// Programa grados celsius 
const temperaturaC = +prompt("Ingrese temperatura en grados celsius")

const temperaturaF = ((temperaturaC+273.15)/273.15)
const temperaturaK = ((temperaturaC*9/5+32)/32)

alert(temperaturaF)
alert(temperaturaK)

//Usuario cantidad de días, años, semanas, días

const diasUsuario = +prompt("Ingrese una cantidad de días")

const años = Math.floor(diasUsuario/365)

const semanas = Math.floor((diasUsuario-365*años)/7)

const dias = diasUsuario-años*365-semanas*7

alert(años)
alert(semanas)
alert(dias)

//sumatoria 5 números

const primerNumero = +prompt("n° 1")
const segundoNumero = +prompt("n° 2")
const tercerNumero = +prompt("n° 3")
const cuartoNumero = +prompt ("n° 4")
const quintoNumero = +prompt ("n°5")

const sumaTotal = primerNumero + segundoNumero + tercerNumero + cuartoNumero + quintoNumero

const promedio = sumaTotal / 5

alert(sumaTotal)
alert(promedio)