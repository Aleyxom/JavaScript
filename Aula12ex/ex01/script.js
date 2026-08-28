function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>`
    if (hora >= 0 && hora <= 12){
        //Bom dia
        img.src="imagens/manha.png"
        document.body.style.background = "rgb(135, 135, 255)"
    }else if (hora <= 18){
        //Boa tarde
        img.src="imagens/tarde.png"
        document.body.style.background = "rgb(255, 120, 67)"
    }else{
        //Boa noite
        img.src="imagens/noite.png"
        document.body.style.background = "rgba(22, 0, 146, 0.9)"
    }
}
