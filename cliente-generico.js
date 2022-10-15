//funcao construtora
function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const gui = new Cliente("Gui","123456789","gui@gmail.com",100)

console.log(gui)