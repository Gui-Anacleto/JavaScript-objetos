class Cliente{
    constructor(nome,email,cpf,saldo){
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
//extend -> herda de cliente
class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        //super -> puxa da classe herdades
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }

    exibirSaldoPoupanca(){
        console.log(this.saldoPoupanca)
    }
}

const cliente1 = new ClientePoupanca("Guilherme","a@mail.com","123456789",100,200) 

console.log(cliente1)

cliente1.depositar(50)
cliente1.depositarPoupanca(100)

console.log(cliente1)

/**
Que classes e objetos são alguns dos principais conceitos da Programação Orientada a Objetos;
Como utilizar uma classe como modelo para construir objetos com propriedades e métodos;
Como utilizar a herança de classe com extends para criar objetos a partir de modelos específicos.
 */