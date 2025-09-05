let nome = prompt("Olá, Qual é o seu nome? : ");

let idade = prompt(nome + ", Qual a sua idade? :");

if(idade>=18){
    alert(nome +", Você tem " + idade + "  anos. Já é maior de idade, acesso liberado!");
}

else{
    alert(nome +", Você tem " + idade + "  anos. Ainda é menor de idade, acesso negado!");
}
