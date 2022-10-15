const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
]}

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))
/*
Além do nome e do valor, cada propriedade tem também três atributos:

Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;

Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). 
Ou seja, se a propriedade é enumerável;

Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
*/

/*
Que no Javascript o protótipo representa um objeto “modelo” com seus métodos, utilizado como base para a criação de outros objetos;
Como acessar propriedades de protótipo através de __proto__ e da propriedade prototype;
Como a herança de protótipo é utilizada para a criação de dados primitivos, arrays e objetos com JavaScript;
Como criar objetos utilizando funções construtoras;
Como utilizar a herança para criação de novos objetos com a propriedade prototype.
*/