//*Criar duas variáveis, guardar duas notas, criar uma terceira
//variável e guardar a média entre essas duas notas, exibir o resultado.


let nota1 = 5
let nota2 = 10
let nota3 = 9

function media(a,b) {
    return (a+b)/2
}

let bim1 = nota1
let bim2 = nota2

const resultado2 = media(bim1, bim2);

console.log ('a media da nota de pedro é de', resultado2);

//*Criar as variáveis nome, idade e cidade, guardar
//valore e exibir a Frase (nome tem idade anos e vive em cidade)


const nome = 'joaquim'
const idade = 15
const cidade = 'curitiba'

console.log (nome, 'tem', idade, 'anos e mora em', cidade)

//Criar uma função exibeNome, que recebe o argumento nome, 
//retorna console.log(nome). Em seguida chamar essa função e 
//passar um nome.

function exibeNome(nome) {
 console.log ('olá', nome, 'como você está?')   
}

exibeNome('daniel')


//criar a função calculaIdade, essa função recebe ano de nascimento
// e retorna a idade da pessoa naquele ano. Em seguida chamar a função 
//e exibir (Em 2021 sua idade é ou será … anos)

function calculaidade(anodenascimento) {
    return 2021- anodenascimento
}

const resposta = calculaidade(1999)

console.log ('em 2021 sua idade é de', resposta)

//Criar uma função imc que recebe como argumentos massa e 
//altura(em cm), essa função retorna o imc (massa/altura²). 
//Em seguinda, utilizando condicionais exibir as seguintes condições:

function imc(massa, altura) {
    return (massa/altura)**2
}

const nome2 = 'caroline'
const massa = 1000
const altura = 58

const res = imc (massa,altura)



if (res < 18.5) {
    console.log (nome2, 'é uma palito humano')
} else if (res < 25) {
    console.log (nome2,'é uma pessoa, saldavelmente saldavel')
} else if (res >= 25 && res < 30) { 
    console.log (nome2, 'está acima do peso')
} else if (res >= 30 && res < 40){ 
    console.log (nome2, 'precisa de uma dietinha')
} else if (res >= 40) { 
    console.log (nome2, 'irá morrer antes do natal')
}