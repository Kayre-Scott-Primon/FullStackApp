
var peso
var altura
var resultado
var IMC

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    IMC = peso / (altura * altura)

    console.log('IMC', IMC, typeof IMC, IMC > 25 && IMC <= 29.99 ? 'true' : 'false')

    /*switch (IMC) {
        case IMC <= 17:
            resultado = 'Muito abaixo do peso'
            break
        case IMC > 17 && IMC <= 18.49:
            resultado = 'Abaixo do peso'
            break
        case IMC >= 18.5 && IMC < 24.99:
            resultado = 'Normal'
            break
        case IMC > 25 && IMC <= 29.99:
            resultado = 'Acima do peso'
            break
        case IMC >= 30:
            resultado = 'Obeso'
            break
        default:
            console.log('oi', IMC)
            resultado = 'Dados incorretos'
            break
    }*/

    if (IMC <= 17){
        resultado = 'Muito abaixo do peso'
    }
    else if (IMC > 17 && IMC <= 18.49){
        resultado = 'Abaixo do peso'
    }
    else if (IMC >= 18.5 && IMC < 24.99){
        resultado = 'Normal'
    }
    else if (IMC > 25 && IMC <= 29.99){
        resultado = 'Acima do peso'
    }
    else if (IMC >= 30){
        resultado = 'Obeso'
    }
    else{
        console.log('oi', IMC)
        resultado = 'Dados incorretos'
    }

    document.getElementById('resultado').innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>' + resultado

}
