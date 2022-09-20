const cliente = {
    nome: "Gui",
    idade: 26,
    email: "email@mail.com",
    cidade: "Ourinhos",
    cpf: "123456789",
    fone:["123456789","987654321"],
    dependente:
    [
        {
        nome: "Arthur",
        parentesco:"Irmão",
        dataNasc:"12/10/2010"},
        {
            nome: "João",
            parentesco: "Irmão",
            dataNasc:"XX/XX/2012"
        }
    ],
    saldo: 1000.00,

    //função - metodo - ação de um objeto
    depositar:function(valor)
    {
        this.saldo += valor
    },

    sacar:function(valor){
        this.saldo -= valor
    }
}

console.log(`Saldo atual: ${cliente.saldo}`);

//usando a função
console.log('Depositou: +30')
cliente.depositar(30);

console.log(`Saldo atualizado: ${cliente.saldo}`);

console.log('Sacou: -30')
cliente.sacar(30);

console.log(`Saldo atualizado: ${cliente.saldo}`);
