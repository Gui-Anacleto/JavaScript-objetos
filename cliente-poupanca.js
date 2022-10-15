function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const gui1 = new ClientePoupanca("Gui1","123456789","gui@gmail.com",100,200)

console.log(gui1)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

gui1.depositarPoup(30)

console.log(gui1.saldoPoup)

