let valores = [1,5,9,4]

for (let c = 0; c < 10; c++) {
    if (valores.indexOf(c) == -1) {
        console.log(`O valor ${c} não foi encontrado`)
    }else{
        console.log(`O valor ${c} foi encontrado na posição ${valores.indexOf(c)}`)
    }
}
