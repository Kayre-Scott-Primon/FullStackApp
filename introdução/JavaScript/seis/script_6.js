function acao(){
    document.write("Executanto... <br/>")
}

var time = setInterval(acao, 1000)

setTimeout(() => clearInterval(time),5000)