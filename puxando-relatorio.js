const  cliente  =  {
    nome: "Gui" ,
    idade: 26 ,
    email: "email@mail.com",
    cidade: "Ourinhos" ,
    cpf: "123456789" ,
    fone: [ "123456789" , "987654321" ],

    saldo:1000,
    depositar:function(valor){
        this.saldo += valor
    }

}

let relatorio = "";

//valida se é objeto
for (let info in cliente){
    if (typeof cliente[info] === "Object" || typeof cliente[info] === "function")
    {
        continue
    }else{
        relatorio += `
        ${info} : ${cliente[info]}
        `
    }
}
    


console.log(relatorio)