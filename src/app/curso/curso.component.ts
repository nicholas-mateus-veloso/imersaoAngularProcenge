import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './servico/curso';
import { CursoService } from './servico/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();
  selecionado: Curso;
  
  listaCurso: Curso[] = [];

  constructor(
    private router: Router,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.cursoService.pesquisar(this.curso.nome).subscribe(
      (retorno: Curso[]) => {
        this.listaCurso = retorno;
      }
    );
  }

  incluir() {
    this.router.navigate(['/curso/incluir']);
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

  remover() {
    this.cursoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

  alterar() {
    this.router.navigate(['/curso/alterar/' + this.selecionado.nome]);
  }

}
