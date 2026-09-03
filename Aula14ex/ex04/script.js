function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10){
            let item = document.createElement('option') //cria elemento
            item.text = `${n} X ${c}  =  ${n*c}` //adiciona o texto ao elemento
            item.value = `tab${c}` //cria um identificador de valor para o elemento
            tab.appendChild(item) // adiciona o elemento ao select
            c++ //incremento
        }
    }
    

}