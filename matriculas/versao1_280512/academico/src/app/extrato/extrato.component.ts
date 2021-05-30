import { Matricula } from './../models/matricula.model';
import { MatriculaService } from './../services/matricula.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  matriculas: any[];

  constructor(private service: MatriculaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((matriculas: Matricula[]) => {
      console.table(matriculas);
      this.matriculas = matriculas;
    });
  }
}
