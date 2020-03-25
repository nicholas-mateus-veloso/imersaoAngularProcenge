import { AlunoService } from './../aluno/servico/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from './servico/matricula';
import { MatriculaService } from './servico/matricula.service';
import { Aluno } from '../aluno/servico/aluno';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  matricula: Matricula = new Matricula();
  selecionado: Matricula;

  listaMatricula: Matricula[] = [];

  listaAluno: Aluno[] = [];

   constructor(
    private router: Router,
    private matriculaService: MatriculaService,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    this.alunoService.consultar('').subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
      }
    );
    
    let codigoAluno = '';
    if(this.matricula.aluno != null) {
      codigoAluno = this.matricula.aluno.codigo;
    }
    this.matriculaService.consultar(codigoAluno).subscribe(
      data => {
        this.listaMatricula = <Matricula[]>data;
      }
    );
  }

  pesquisar() {
    let codigoAluno = '';
    if(this.matricula.aluno !== null) {
      codigoAluno = this.matricula.aluno.codigo;
    }

    this.matriculaService.consultar(codigoAluno).subscribe(
      data => {
        this.listaMatricula = <Matricula[]>data;
      }
    );
  }

  incluir() {
    this.router.navigate(['/matricula/incluir']);
  }

  alterar() {
    this.router.navigate(['/matricula/alterar/' + this.selecionado.aluno.codigo]);
  }

  remover() {
    this.matriculaService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

}
