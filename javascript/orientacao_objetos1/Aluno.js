export default class Aluno{
    nome;
    nomeDaMae;
    //convensão de que esse atributo é privado
    _idade;
    matricula;

    constructor(nome, nomeDaMae){
        this.nome = nome;
        this.nomeDaMae = nomeDaMae;
    }

    alterarIdade(idade){
        if(idade > 0){
            this._idade = idade;
            return this._idade;
        } else{
            console.log("Idade inválida");
        }
    }

    mostraIdade(){
        return this._idade;
    }

}