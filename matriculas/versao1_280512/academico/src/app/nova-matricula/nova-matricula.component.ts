import { MatriculaService } from './../services/matricula.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Matricula } from '../models/matricula.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-matricula',
  templateUrl: './nova-matricula.component.html',
  styleUrls: ['./nova-matricula.component.scss'],
})

export class NovaMatriculaComponent {

  @Output() aoMatricular = new EventEmitter<any>();

  nome: string;
  idade: number;

  constructor(private service: MatriculaService, private router: Router){}

  transferir(){
    console.log('solicitada nova matrícula');

    const valorEmitr : Matricula = {nome: this.nome, idade: this.idade};
    this.aoMatricular.emit(valorEmitr);

    this.service.adiciona(valorEmitr).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      error => console.error(error)
    );
  }


  limparCampos(){
    this.nome = "";
    this.idade = 0;

  }
}
