package portifolio.peterson.alunos.controller.form;

import portifolio.peterson.alunos.model.Aluno;

public class AlunoForm {
	private String nome;
	private int idade;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
		
	public Aluno converter() {
		return new Aluno(nome, idade);
	}
	
}
