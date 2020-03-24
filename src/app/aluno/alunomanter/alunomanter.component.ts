import { AlunoService } from './../servico/aluno.service';
import { Aluno } from './../servico/aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunomanter',
  templateUrl: './alunomanter.component.html',
  styleUrls: ['./alunomanter.component.css']
})
export class AlunomanterComponent implements OnInit {

  nomeAluno: string = '';
  aluno: Aluno = new Aluno();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private AlunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nomeAluno = this.routeActivated.snapshot.params.id;
    if(this.nomeAluno != null) {
      this.operacao = 'Alterar';
      this.AlunoService.consultar(this.nomeAluno).subscribe(
        data => {
          this.aluno = (<Aluno[]>data)[0];
        }
      );
    }
  }

  incluir() {
    this.AlunoService.incluir(this.aluno).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }

  voltar() {
    this.router.navigate(['/aluno']);
  }

  alterar() {
    this.AlunoService.alterar(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno'])
      }
    );
  }

}
