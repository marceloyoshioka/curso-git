import { MatriculaService } from './services/matricula.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academico';

  constructor(private service: MatriculaService){

  }

}
