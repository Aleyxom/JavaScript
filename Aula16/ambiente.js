let res = parimpar(4)
console.log(res)
console.log(parimpar(5))

function parimpar(num){
    if(num % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}