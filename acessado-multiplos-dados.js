//objeto
const cliente = {
    nome: "Gui",
    idade: 26,
    email: "email@mail.com",
    cidade: "Ourinhos",
    cpf: "123456789",
    fone:["123456789","987654321"]
}

cliente.fone.forEach(fones => console.log(fones));