package portifolio.peterson.alunos.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import portifolio.peterson.alunos.controller.form.AlunoForm;
import portifolio.peterson.alunos.model.Aluno;
import portifolio.peterson.alunos.repository.AlunoRepository;

@RestController
@RequestMapping("/matriculas")
public class MatriculasController {

	@Autowired
	private AlunoRepository alunoRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping
	public List<Aluno> lista() {
		List<Aluno>listaAlunos = alunoRepository.findAll();
		return listaAlunos;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping()
	public ResponseEntity<Aluno> novo(@RequestBody AlunoForm form, UriComponentsBuilder componentsBuilder) {
		Aluno aluno = form.converter();
		alunoRepository.save(aluno);
		
		URI uri = componentsBuilder.path("/matriculas/{id}").buildAndExpand(aluno.getId()).toUri();
		return ResponseEntity.created(uri).body(aluno);
	}
	
}
