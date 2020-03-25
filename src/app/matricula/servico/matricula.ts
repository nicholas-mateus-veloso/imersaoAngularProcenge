import { MatriculaCurso } from './matriculaCurso';
import { Aluno } from 'src/app/aluno/servico/aluno';


export class Matricula  {
    codigo: string;
    aluno: Aluno;
    listaMatriculaCurso: MatriculaCurso[] = [];
}