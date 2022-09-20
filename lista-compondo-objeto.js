const cliente = {
    nome: "Gui",
    idade: 26,
    email: "email@mail.com",
    cidade: "Ourinhos",
    cpf: "123456789",
    fone:["123456789","987654321"]
}

cliente.dependente = [{
    nome: "Arthur",
    parentesco:"Irmão",
    dataNasc:"12/10/2010"}]

console.log(cliente);

cliente.dependente.push({
    nome: "João",
    parentesco: "Irmão",
    dataNasc:"XX/XX/2012"
}) 

console.log(cliente);

const IrmaoMaisNovo = cliente.dependente.filter(dependentes => dependentes.dataNasc==="XX/XX/2012")

console.log(IrmaoMaisNovo[0].nome)