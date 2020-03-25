import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunomanterComponent } from './aluno/alunomanter/alunomanter.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { MatriculamanterComponent } from './matricula/matriculamanter/matriculamanter.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso',
    component: CursoComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso/incluir',
    component: CursomanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso/alterar/:id',
    component: CursomanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'aluno',
    component: AlunoComponent,
    pathMatch: 'full'
  },
  {
    path: 'aluno/incluir',
    component: AlunomanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'aluno/alterar/:id',
    component: AlunomanterComponent,
    pathMatch: 'full'
  },

  {
    path: 'matricula',
    component: MatriculaComponent,
    pathMatch: 'full'
  },
  {
    path: 'matricula/incluir',
    component: MatriculamanterComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
