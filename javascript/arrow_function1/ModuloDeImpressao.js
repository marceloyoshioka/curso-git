class ModuloDeImpressao{
    constructor(){
        this._codigo = 10;
    }
    imprime(nomes){
        nomes.forEach((nome) => {
            console.log(`${this._codigo}: ${nome}`);
        });
    }
}

const professores = ['Elias','Yuri','Gabriel'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);

//equivalentes em arrow function
//function soma(a,b){
//    return a+b;
//}
const soma = (a,b) => a+b;

console.log(soma(2,5));

//function isAdulto(idade){
//    return idade >= 18;
//}

const isAdulto = idade => idade >= 18;
console.log(isAdulto(5));
console.log(isAdulto(20));

//function getNumeroAleatorio(){
//    return Math.random()
//}

const getNumeroAleatorio = () => Math.random()
console.log(getNumeroAleatorio());

//document.addEventListener('click',function(){
//    console.log('clicado');
//})

//document.addEventListener('click', () => console.log('clicado') )

class Aluno {
    constructor(nome){
        this.nome = nome;
    }

    mostraNome(){
        setTimeout(function(){
            console.log(this.nome);
        },1000);
    }

    mostraNomeComArrow(){
        setTimeout(() => {
            console.log(this.nome);
        },1000);
    }

}

const aluno1 = new Aluno("Pedro");
aluno1.mostraNome();
aluno1.mostraNomeComArrow();