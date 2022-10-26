class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

const cli1 = new Cliente("Gui", "gui@gmail.com","123456789",100)

cli1.exibirSaldo();

console.log(cli1)
