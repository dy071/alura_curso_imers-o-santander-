alert('Boas vindas ao nosso site!');
let name = 'Lua';
let age = 25;
let numberOfSales = 50;
let availableBalance = 1000;

let errorMenssage = alert('Erro! Preencha todos os campos');

let nameUser = prompt('Digite seu nome');
let ageUser = prompt('Digite sua idade');

if (ageUser >= 18) {
   alert('Pode tirar a habilitação!');
} else {
   alert('Ainda não pode tirar a habilitação. Muito novo para isso!');
}
