class Aluno{
    nome;
    nomeDaMae;
    //convensão de que esse atributo é privado
    _idade;
    matricula;

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

class Escola{
    nome;
    ano;
    sufixo;
    turno;

    matricularNoInfantil(idade){
        if(idade >= 3 && idade <= 5){
            console.log("aluno matriculado com sucesso");
        } else{
            console.log("essa matrícula não pode ser realizada")
        }
    }
}

const aluno1 = new Aluno();

aluno1.nome = "Andrea Cristina";
aluno1.nomeDaMae = "Silvia";
aluno1.alterarIdade(35);
aluno1.matricula = "1234";

const aluno2 = new Aluno();

aluno2.nome = "Arthur Adriel";
aluno2.nomeDaMae = "Andrea";
aluno2.alterarIdade(3);
aluno2.matricula = "1256";

const escola1 = new Escola();
escola1.nome = "Sesi";
escola1.ano = "1º ANO";
escola1.sufixo = "A";
escola1.turno = "Manhã";

console.log(aluno1);
console.log(aluno2);

//Como o atributo idade é privado eu criei um método
//para não acessa-lo diretamente(método com retorno)
escola1.matricularNoInfantil(aluno1.mostraIdade());
escola1.matricularNoInfantil(aluno2.mostraIdade());



