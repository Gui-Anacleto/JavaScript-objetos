//objeto
const cliente = {
    nome: "Gui",
    idade: 26,
    email: "email@mail.com",
    cidade: "Ourinhos",
    cpf: "123456789"
}

//acessando info
console.log(cliente.nome);

console.log(`Meu nome é ${cliente.nome},tenho ${cliente.idade} anos e moro em ${cliente.cidade}.`)

console.log(cliente.cpf.substring(0,5))