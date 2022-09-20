//objeto
const cliente = {
    nome: "Gui",
    idade: 26,
    email: "email@mail.com",
    cidade: "Ourinhos",
    cpf: "123456789"
}

const chaves = ["nome","idade","cpf", "email"]

console.log(cliente[chaves[0]])

//metodo de array
            //func.callback
                //indice
chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["nome"])