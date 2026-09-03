let num1 = Number(5)
let num2 = Number(3)
console.log(`A soma entre ${num1} e ${num2} é igual a ${soma(num1,num2)}`)

function soma(num1=0, num2=0){
    return num1 + num2
}