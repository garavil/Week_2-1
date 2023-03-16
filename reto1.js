// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

class Person {

    constructor ( altura, peso ){

    

    this.nombre = "Pedro"
    this. apellido = "Diaz"
    this.altura = altura
    this.peso = peso
    this.edad = 30
    this.colorDePelo = "Rubio"
    
    }

    imc(){

        return this.peso/(this.altura*this.altura)

    }

}

let individuo = new Person (1.82,100)

// console.log(individuo)

let calImc = individuo.imc()

console.log(calImc)

