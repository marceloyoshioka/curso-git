import Aluno from "./Aluno.js";

export default class Escola{
    nome;
    ano;
    sufixo;
    turno;
    _aluno;

    set aluno(novoAluno){
        if(novoAluno instanceof Aluno){
            this._aluno = novoAluno;
        }
    }

    get aluno(){
        return this._aluno;
    }

    matricularNoInfantil(idade){
        if(idade >= 3 && idade <= 5){
            console.log("aluno matriculado com sucesso");
        } else{
            console.log("essa matrícula não pode ser realizada")
        }
    }

    transferir(aluno,escola){
        escola.aluno = this.aluno;
        this.aluno = "";
    }
}
