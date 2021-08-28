// Parte 1 do Fluxo - Login e Senha
let login;
let senha = 1234;

if (senha == 1234) {
    console.log("Acesso valido.") 
} else {
    console.log("Login se Senha Invalidos.")
}

// Parte 2 do Fluxo - Casdatro de Data
const dataDeHoje = new Date;
const dataDoEvento = new Date('2021-12-28');

if (dataDoEvento > dataDeHoje) {
    console.log("Agora cadastre os participantes.")
} else {
    console.log("Data do evento anterior a de hoje.")
}

// Parte 3 - Cadastro de Participantes por idade
const participantes = ["Joao","Maria","Jose"];
let idadeJoao = 16;
let idadeMaria = 18;
let idadeJose = 50;

if (idadeMaria >= 18) {
    console.log("Cadastro Permitido.")
} else {
    console.log("Cadastro nao permitido pela idade menor que 18 anos.")
}

// Parte 4 - Verificacao de Participantes
if (participantes.length < 100) {
    console.log("Cadastro Finalizado.") 
} else {
    console.log("Numero de participantes excede o limite de 100.")
}