import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private http: HttpClient
  ) { }

  consultar(nome: string) {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/" + nome);
  }

  incluir(aluno: Aluno) {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/incluir/", aluno);
  }

  alterar(aluno: Aluno) {
    return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/alterarparcial", aluno);
  }

  remover(aluno: Aluno) {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/remover", aluno);
  }


}
