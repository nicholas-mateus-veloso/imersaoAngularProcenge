import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from './servico/aluno';
import { AlunoService } from './servico/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();
  selecionado: Aluno;

  listaAluno: Aluno[] = [];

  constructor(
    private router: Router,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.alunoService.consultar(this.aluno.nome).subscribe(
      (retorno: Aluno[]) => {
        this.listaAluno = retorno;
      }
    );
  }

  incluir() {
    this.router.navigate(['/aluno/incluir']);
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

  remover() {
    this.alunoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  alterar() {
    this.router.navigate(['/aluno/alterar/' + this.selecionado.nome]);
  }

}
