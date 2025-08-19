// 0 = Domingo
// 1 = Segunda
// 2 = Terça    
// 3 = Quarta
// 4 = Quinta
// 5 = Sexta
// 6 = Sabado

let index = 3

// if(index ==0){
//     console.log('Domingo')
// }

// else if(index ==1){
//     console.log('Segunda')
// }

// else if(index ==2){
//     console.log('Terça')
// }

// else if(index ==3){
//     console.log('Quarta')
// }

// else if(index ==4){
//     console.log('Quinta')
// }

// else if(index ==5){
//     console.log('Sexta')
// }

// else{
//     console.log('Sabado')

// }

// SWITCH E CASE  

let data = newData()
let dia = data.getDay()

switch(dia){
    case 0: console.log('Domingo')
        break
    case 1: console.log('Segunda')
        break
    case 2: console.log('Terça')
        break
    case 3: console.log('Quarta')
        break
    case 4: console.log('Quinta')
        break
    case 5: console.log('Sexta')
        break
    case 6: console.log('Sábado')
        break
}

