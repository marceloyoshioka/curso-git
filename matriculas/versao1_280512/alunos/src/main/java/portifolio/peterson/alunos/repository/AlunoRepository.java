package portifolio.peterson.alunos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import portifolio.peterson.alunos.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{

}
