let num1 = 0
let num2 = 7
let operador = '/'

// soma
if(operador == '+'){
    let resultado_mm = num1+num2
    console.log(`${num1}+${num2}= ${resultado_mm}`)
}

// multiplicação
else if(operador == '*'){
    let resultado_m = num1*num2
    console.log(`${num1}X${num2}= ${resultado_m}`)
}

// subtração
if(operador == '-'){
    let resultado_s = num1-num2
    console.log(`${num1}-${num2}= ${resultado_s}`)
}

// divisão
if(operador == '/' && (num1!=0 && num2!=0)){
    let resultado_d = num1/num2
    console.log(`${num1}/${num2}= ${resultado_d}`)
}
