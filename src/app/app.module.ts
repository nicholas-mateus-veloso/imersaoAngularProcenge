import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LayoutComponent } from './layout/layout.component';
import { CursoService } from './curso/servico/curso.service';
import { AlunoService } from './aluno/servico/aluno.service';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunomanterComponent } from './aluno/alunomanter/alunomanter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    LayoutComponent,
    CursomanterComponent,
    AlunoComponent,
    AlunomanterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CursoService,
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
