// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

class Person {

    constructor ( altura, peso, yearOfBirth){

    

    this.nombre = "Pedro"
    this. apellido = "Diaz"
    this.altura = altura
    this.peso = peso
    this.edad = 30
    this.colorDePelo = "Rubio"
    this.yearOfBirth = yearOfBirth
    this.hobbies = ["leer", "comer", "jugar a videojuegos"]
    
    }

    imc(){

        return this.peso/(this.altura*this.altura)

    }

    calculaEdad(){

        return 2023 - this.yearOfBirth
    }

    printAll(){

        for ( let atr in this){

            console.log(atr + "-" + this[atr])
        }
    }

    printHobbies(){

        return this.hobbies

    }

}

let individuo = new Person (1.82,100, 1993)

console.log(individuo)

let calImc = individuo.imc()

console.log(calImc)

let calEdad = individuo.calculaEdad()

console.log(calEdad)

let mostrarTodo = individuo.printAll()

console.log(mostrarTodo)

let hobbiesPer = individuo.printHobbies()

console.log(hobbiesPer)

module.exports = Person