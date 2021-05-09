import Aluno from './Aluno.js'
import Escola from './Escola.js'

const aluno1 = new Aluno("Andrea Cristina","Silvia");
aluno1.alterarIdade(35);
aluno1.matricula = "1234";

const aluno2 = new Aluno("Arthur Adriel","Andrea");
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

escola1.aluno = aluno1;
console.log(escola1);

const escola2 = new Escola();
escola2.nome = "CEI";
escola1.ano = "1º ANO";
escola1.sufixo = "A";
escola1.turno = "Manhã";

escola1.transferir(aluno1,escola2);
console.log(escola2);
console.log(escola1);


//uso do set
escola2._aluno = aluno1;
console.log(escola2);














