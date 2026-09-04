var valores =[]

function adicionar() {
    let num = document.getElementById("numero")
    let numero = Number(num.value)

    if (numero >= 1 && numero <= 100 && valores.indexOf(numero) == -1) {
        valores.push(numero)
        let select1 = document.getElementById("informados")
        let item = document.createElement("option")
        item.text = `Valor ${numero} adicionado!`
        select1.appendChild(item)
    } else {
        alert("Valor informado é inválido ou já foi adicionado!")
    }
}

function analisar() {
    let resultado = document.getElementById("resultado")
    if (valores.length > 0) {
        resultado.innerHTML = ""
        resultado.innerHTML += `<p>Ao total foram adicionados ${valores.length} valores.<br>`
        resultado.innerHTML += `O maior valor informado foi ${Math.max(...valores)}.<br>`
        resultado.innerHTML += `O menor valor informado foi ${Math.min(...valores)}.<br>`

        let soma = 0
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i]
        }

        resultado.innerHTML += `Somando tudo deu ${soma}<br>`
        resultado.innerHTML += `A média dos valores digitados é ${soma / valores.length}</p>`
    } else {
        alert("Adicione valores antes de analisar!")
    }
}