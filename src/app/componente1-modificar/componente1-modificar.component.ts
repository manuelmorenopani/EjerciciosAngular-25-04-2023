import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { listacurso } from '../modelos/listacursos';
import { ServiciocursosService } from '../serviciocursos.service';
import { nivel } from '../modelos/nivel';
ActivatedRoute
@Component({
  selector: 'app-componente1-modificar',
  templateUrl: './componente1-modificar.component.html',
  styleUrls: ['./componente1-modificar.component.css']
})
export class Componente1ModificarComponent {
  curso : listacurso = new listacurso(0,"",0,nivel.alto)
  cursos : listacurso[]=[]
  ids : number = 0


  constructor(private serviciocursos: ServiciocursosService,
    private activarrutas : ActivatedRoute,
    private rutes : Router){
      this.cursos=this.serviciocursos.getcurso()
    }
  

  ngOnInit(): void {

    this.activarrutas.params.subscribe(data => {
    this.ids = data['ids'];
    if(this.ids != 0)
    this.curso = this.serviciocursos.getcursobyid(this.ids)!;
  })
  }

  anadir(){
    this.serviciocursos.modificarcurso(this.ids, this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
    }
  alta(){
    this.serviciocursos.anadircurso(this.curso)
    this.curso = new listacurso(0,"",0,nivel.alto)
  }
}
  

