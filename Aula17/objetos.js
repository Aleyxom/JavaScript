let amigos = []
console.log(typeof amigos) // object

let amigo = {nome:"José", idade: 25, sexo:"M", peso: 85.4, engordar(p=0){
    this.peso += p
}}

amigo.engordar(10)
console.log(`O amigo ${amigo.nome} pesa ${amigo.peso} kg.`)