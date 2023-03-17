const Person = require("./person")

let persona = new Person ( 1.90, 80, 1992 )

console.log(persona)

let calImc = persona.imc()

console.log(calImc)

let calEdad = persona.calculaEdad()

console.log(calEdad)

let mostrarTodo = persona.printAll()

console.log(mostrarTodo)

let hobbiesPer = persona.printHobbies()

console.log(hobbiesPer)