function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.style.textAlign = 'center'

        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                //Criança
                img.setAttribute('src', 'imgs/bebe_menino.png')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imgs/menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imgs/jovem_homem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'imgs/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                //Criança
                img.setAttribute('src', 'imgs/bebe_menina.png')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imgs/menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imgs/jovem_mulher.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'imgs/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}